from PIL import Image
import os
import evdev
import time
import sys
import subprocess
import gphoto2 as gp
import re

img_dir = '/home/pi/Desktop/photobooth/server/img'
original_dir = os.path.join(img_dir, 'original')
thumb_dir = os.path.join(img_dir, 'thumb')
MAX_THUMB_SIZE = (200, 200)

def compute_initial_id():
    numbers = [0]
    for filename in os.listdir(original_dir):
        str_numbers = re.findall('[0-9]+', os.path.basename(filename))
        numbers += list(map(lambda st: int(st), str_numbers))
    return max(numbers) + 1


def create_thumbnail(filename):
    image = Image.open(os.path.join(original_dir, filename))
    image.thumbnail(MAX_THUMB_SIZE)
    image.save(os.path.join(thumb_dir, filename))

def identify_shutter():
    devices = [evdev.InputDevice(path) for path in evdev.list_devices()]
    shutter = None
    for dev in devices:
        if dev.name == 'Logitech USB Receiver':
            shutter = dev
    if (not shutter):
        sys.exit("Couldn't find device")
    return shutter

def is_valid_trigger(event, last_photo_time):
    if event.type != evdev.ecodes.EV_KEY: return False
    if event.sec < last_photo_time: return False
    if event.value != 1: return False
    return True

def capture(image_id):
    callback_obj = gp.check_result(gp.use_python_logging())
    camera = gp.Camera()
    camera.init()
    print('Capturing image')
    file_path = camera.capture(gp.GP_CAPTURE_IMAGE)
    print('Camera file path: {0}/{1}'.format(file_path.folder, file_path.name))
    target = os.path.join(original_dir, f"img_{image_id:06d}.jpg")
    print('Copying image to', target)
    camera_file = camera.file_get(file_path.folder, file_path.name, gp.GP_FILE_TYPE_NORMAL)
    camera_file.save(target)
    camera.exit()
    return os.path.basename(target)


def main_loop():
    last_photo_time = time.time()
    image_id = compute_initial_id()
    shutter = identify_shutter()
    for event in shutter.read_loop():
        if not is_valid_trigger(event, last_photo_time): continue
        try:
            filename = capture(image_id)
            image_id += 1
            create_thumbnail(filename)
            last_photo_time = time.time()
            print("Photo taken.")
        except Exception as e:
            print("Exception caught")
            print(e)

main_loop()

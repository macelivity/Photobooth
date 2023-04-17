# importing Image class from PIL package 
from PIL import Image
import os

original_dir = "D://Studium//WS2122//Sonstiges//photobooth//server//img//original"
thumb_dir = "D://Studium//WS2122//Sonstiges//photobooth//server//img//thumb"
dir_list = os.listdir(original_dir)
# onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

MAX_SIZE = (200, 200)

for filename in os.listdir(original_dir):
    print(filename)
    if not filename.lower().endswith(".jpg"):
        continue
    image = Image.open(os.path.join(original_dir, filename))
    image.thumbnail(MAX_SIZE)
    image.save(os.path.join(thumb_dir, filename))
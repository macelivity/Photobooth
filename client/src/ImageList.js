import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { saveAs } from "file-saver";
import { HOST, WEDDING } from './App';


function urlOriginal(file) {
    return HOST + "full_image/" + file
}
function urlThumb(file) {
    return HOST + "thumb/" + file
}
function convertToImage(file) {
    return {
        src: urlOriginal(file),
        thumbnail: urlThumb(file),
        thumbnailHeight: 113,
        thumbnailWidth: 200,
    }
}


class ImageList extends Component {
    state = {
        img_list: [],
        currentImage: 0
    };

    onCurrentImageChange = (index) => {
        this.setState({ currentImage: index });
    }

    componentDidMount() {
        this.callBackendAPI()
            .then(res => {
                console.log(res)
                this.setState({ img_list: res.img_list })
            }
            )
            .catch(err => console.log(err));
    };
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch("http://192.168.178.121:5000/img_list", { mode: 'cors' });
        console.log(response)
        const body = await response.json();
        console.log(body)

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    onClickImage = () => {
        window.location.href = urlOriginal(this.state.img_list[this.state.currentImage])
    }

    saveFile = () => {
        saveAs(
            urlOriginal(this.state.img_list[this.state.currentImage]),
            "Wedding_" + WEDDING.groom + "-" + WEDDING.bride + "_" + this.state.img_list[this.state.currentImage]
        );
    }

    render() {
        const IMAGES = this.state.img_list.map(convertToImage)
        return (
            <Gallery
                images={IMAGES}
                enableImageSelection={false}
                rowHeight={150}
                enableLightbox={true}
                currentImageWillChange={this.onCurrentImageChange}
                onClickImage={this.onClickImage}
                backdropClosesModal

                customControls={[
                    this.state.img_list.length > 0 && <div key="customControls " className="customControls">
                        <button className="downloadBtn" onClick={this.saveFile}>Herunterladen</button>
                    </div>
                ]}
            />
        );
    }
}

export default ImageList;
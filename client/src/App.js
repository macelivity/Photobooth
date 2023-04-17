import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList';

export const HOST = "http://192.168.178.157:5000/"
export const WEDDING = { groom: "Dennis", bride: "Lidiya"}


function Heading(){
    let imgIndex = Math.floor(Math.random() * 4);
    let symbol = Math.floor(Math.random() * 2);

    return(
        <div className="heading">
            <img className="header" src={"/Images/Header-Bg_0" + imgIndex + ".jpg"} alt="Photobooth Heading Bg-img"/>
            <div id="text">
                <h1>{WEDDING.groom}</h1>
                <h1 className="symbol">{symbol === 0 ? <>&hearts;</> : <>&#9901;</>}</h1>
                <h1>{WEDDING.bride}</h1>
            </div>
        </div>
    );
}

class App extends Component {
    render(){
        return(
            <>
                <Heading />
                <ImageList />
            </>
        );
    }
}

export default App;

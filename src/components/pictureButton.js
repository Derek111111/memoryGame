import React from "react";
import styles from "../styles/pictureButton.css";

function PictureButton(props){

    return(
        <div className="personImage left pictureButton" onClick={props.onClick} data-person={props.children}>
            <img data-person={props.children} src={props.image} alt="person :D"></img>
            <p className="centeredText" data-person={props.children}>{props.children}</p>
        </div>
    );


}

export default PictureButton;
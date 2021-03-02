import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {

    return (
        <div>
            <h2>hover over images</h2>
            {/* rename html elment to a functional react componet and set the src to two diff custom attributes */}
            <ImageToggleOnMouseOver primaryImg="/img/bw/img1.jpg"
            secondaryImg="/img/img1.jpg" alt="first image" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/img/bw/img2.jpg"
            secondaryImg="/img/img2.jpg" alt="second image" />
        </div>
    );
};

export default ImageChangeOnMouseOver;
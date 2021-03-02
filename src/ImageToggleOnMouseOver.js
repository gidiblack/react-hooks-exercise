import React, {useRef} from "react";

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    // declare jsx constant by calling useRef to assign "imageRef" to constant and use imageRef.current to assign new attributes
    const imageRef = useRef(null);
    // use mouse over and mouse out functions to change the image attributes
    return (
        <img onMouseOver={() =>{
            imageRef.current.src = secondaryImg;
        }} onMouseOut={() => {
            imageRef.current.src = primaryImg;
        }}
            src={primaryImg} alt="" ref={imageRef} />
    );
};

export default ImageToggleOnMouseOver;
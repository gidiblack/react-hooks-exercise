import React, {useRef, useEffect, useState} from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    // create a state for when component is loading, this becomes the array of dependencies necessary for the second parameter of useEffect hook
    const [isLoading, setIsLoading] = useState(true);
    // scroll event listener using useEffect hook, that function returns another function to remove the listener before the component unmounts
    useEffect (() => {
        window.addEventListener("scroll", scrollHandler);
        // call setInView to set the state of the component when it first mounts
        setInView(isInView());
        // call setIsLoading to change loading state to false
        setIsLoading(false);
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    },[isLoading]);

    // useState hook to track whether the current component is in full view of the browser window
    const [inView, setInView] = useState(false);

    //function that returns whether the component is showing in the scrollable area using getBoundingClientRect method
    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };

    // function to set the inView state decleared earlier based on whether the current image/component is in view
    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        });
    };
    // check if isLoading is false then return secondaryImg component when it's state == inView and primaryImg component when it's state != inView
    return isLoading ? null : (
        <img 
            src={inView ? secondaryImg : primaryImg} alt="" ref={imageRef} width="500" height="400" />
    );
};

export default ImageToggleOnScroll;
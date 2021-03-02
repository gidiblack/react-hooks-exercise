import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <div>
            {/* map a list of images to be returned vertically */}
            {[1, 2, 3, 4].map(speakerId => {
                return (
                    <div key={speakerId}>
                        <ImageToggleOnScroll
                        primaryImg={`/img/bw/img${speakerId}.jpg`}
                        secondaryImg={`/img/img${speakerId}.jpg`}
                        alt="" />
                    </div>
                );
            })}
        </div>
    );
};


export default ImageChangeOnScroll;


// const Syntax = () => {

//     const [checkBoxValue,setCheckBoxValue] = useState(false);
    // first useEffect parameter must be a function using arrow syntax which returns another function to specify what gets run when the functional component exits
    // seconce useEffect parameter must be an array with a list of dependencies for the functional component
    
//     useEffect(() => {
//         console.log('in useEffect');
//         return () => {
//             console.log('in useEffect Cleanup'); 
//         }
//     }, [checkBoxValue]);

//     return (
//         <div></div>
//     );
// };

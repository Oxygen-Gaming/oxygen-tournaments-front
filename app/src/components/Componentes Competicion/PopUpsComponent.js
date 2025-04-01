import React, { useState, useEffect } from "react";

const PopUpsComponent = ({ title, message, image, onMoreInfo, linkText, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false); // Hide the pop-up when the "X" is clicked
        if (onClose) onClose();
    };

    const handleMoreInfo = () => {
        setIsVisible(false); // Hide the pop-up
        if (onMoreInfo) onMoreInfo(); // Trigger the onMoreInfo callback
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-lg shadow-2xl w-[300px] text-center z-50"
        >
            <button
                onClick={handleClose}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-transform transform hover:scale-110"
            >
                X
            </button>
            <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg mb-4 shadow-lg" />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-4 text-sm">{message}</p>
            <button
                onClick={handleMoreInfo}
                className="block bg-yellow-400 text-black px-4 py-2 rounded-lg transition-transform transform hover:scale-110 font-bold"
            >
                {linkText}
            </button>
        </div>
    );
};

export default PopUpsComponent;

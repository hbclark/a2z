import React, { useState } from 'react';

const ImageModal = ({ imageSrc, description }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt="Description"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="w-64 h-64 object-cover"
      />
      {isHovering && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="text-white p-4 text-center">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
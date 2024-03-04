// src/components/DisplayImageComponent.js

import React from 'react';

const DisplayImageComponent = () => {
  const imageUrl = 'https://images.bewakoof.com/uploads/grid/app/gif-2--2--1709216937.gif';

  return (
    <div>
      <h2>Display Image Example</h2>
      <img src={imageUrl} alt="Bewakoof Gif" />
    </div>
  );
};

export default DisplayImageComponent;

import ImageGallery from 'react-image-gallery';
import React, { Component } from "react";
export default class ImageCarousel extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'https://i.ibb.co/0qbPPXb/DSC-2136.jpg',
        thumbnail: 'https://i.ibb.co/0qbPPXb/DSC-2136.jpg/250/150',
      },
      {
        original: 'https://i.ibb.co/r6dwj3r/dji-mavic-pro-image.jpg',
        thumbnail: 'https://i.ibb.co/r6dwj3r/dji-mavic-pro-image.jpg/250/150/',
      },
      {
        original: 'https://i.ibb.co/WPpgJV0/Mav-Photo-copy.jpg',
        thumbnail: 'https://i.ibb.co/WPpgJV0/Mav-Photo-copy.jpg/250/150/',
      },
      {
        original: 'https://i.ibb.co/nfqyQ7F/Mav-2-copy.jpg',
        thumbnail: 'https://i.ibb.co/nfqyQ7F/Mav-2-copy.jpg/250/150/',
      },
      {
        original: 'https://i.ibb.co/y4zrLCd/Yarmouthbar.jpg',
        thumbnail: 'https://i.ibb.co/y4zrLCd/Yarmouthbar.jpg/250/150/',
      },
    ];
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}
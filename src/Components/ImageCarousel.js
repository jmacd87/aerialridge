import ImageGallery from 'react-image-gallery';
import React, { Component } from "react";
import './ImageCarousel.css';
const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
export default class ImageCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
          showIndex: false,
          showBullets: true,
          infinite: true,
          showThumbnails: true,
          showFullscreenButton: true,
          showGalleryFullscreenButton: true,
          showPlayButton: true,
          showGalleryPlayButton: false,
          showNav: true,
          isRTL: false,
          slideDuration: 450,
          slideInterval: 2000,
          slideOnThumbnailOver: false,
          thumbnailPosition: 'bottom',
          showVideo: {},
        }
    }

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
      {
        thumbnail: `https://i.ibb.co/dPwPTTX/thumbnail.jpg`,
        original: `https://i.ibb.co/dPwPTTX/thumbnail.jpg`,
        embedUrl: 'https://www.youtube.com/embed/wB_xT_8dVAg',
        description: 'Click on photo to view video',
        renderItem: this._renderVideo.bind(this)
      },
    ];
    return (
      <ImageGallery
      items= {images}

    /> 
    )
}


      _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
      }
    _renderVideo(item) {
      
        return (
            
          <div className='image-gallery-image'>
           {
              this.state.showVideo[item.embedUrl] ?
                <div className='video-wrapper'>
                    <a
                      className='close-video'
                      onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                    >
                    </a>
                    <iframe
                      width= '100%'
                      height='900'
                      src={item.embedUrl}
                      frameBorder='0'
                      allowFullScreen
                    >
                    </iframe>
                </div>
              :
                <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
                  <div className='play-button'></div>
                  <img src={item.original}/>
                  {
                    item.description &&
                      <span
                        className='image-gallery-description'
                        style={{left: '45%'}}
                      >
                        {item.description}

                      </span>
                  }
                </a>
            }
          </div>
        );
      
      
  }
  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });
  
    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }
  
      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }
 
}

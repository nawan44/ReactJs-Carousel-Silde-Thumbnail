// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Bogor from './Image/bogor.jpg';
import Bromo from './Image/bromo.JPG';
import Gorontalo from './Image/gorontalo.jpg';

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>My Image Gallery</h2>
                <Carousel autoPlay interval="700" transitionTime="700" style={{margin : 0}}>
                    <div >
                        <img src={Bogor} />
                        <p className="legend">Bogor</p>
                    </div>
                    <div>
                        <img src={Bromo} />
                        <p className="legend">Bromo</p>
                    </div>
                    <div>
                        <img src={Gorontalo} />
                        <p className="legend">Gorontalo</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallaryComponent;
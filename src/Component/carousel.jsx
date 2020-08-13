// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Bogor from './Image/bogor.jpg';
import Bromo from './Image/bromo.JPG';
import Gorontalo from './Image/gorontalo.jpg';
import Bali from './Image/bali.jpg';
import Derawan from './Image/derawan.jpg';
import Karanganyar from './Image/karanganyar.jpg';
import Kepseribu from './Image/kepseribu.jpg';

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>My Image Gallery</h2>
                <Carousel autoPlay interval="1500" transitionTime="1000" >
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

                    <div >
                        <img src={Bali} />
                        <p className="legend">Bali</p>
                    </div>
                    <div>
                        <img src={Derawan} />
                        <p className="legend">Derawan</p>
                    </div>
                    <div>
                        <img src={Karanganyar} />
                        <p className="legend">Karanganyar</p>
                    </div>
                    <div>
                        <img src={Kepseribu} />
                        <p className="legend">Kepulauan Seribu</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallaryComponent;
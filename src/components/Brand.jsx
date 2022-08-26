import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import React from 'react';
// import img from '../images/'
// import img1 from '../images/brand-2.png';
const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="Brand-sec">
            <CssBaseline />
            {/* <img scr={img1} alt="img-1" /> */}
            <Container maxWidth="xxl" className='brand-container p-0'>
                {/* Slider */}
                <div className='brand-items'>
                    <Slider {...settings}>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="barnd-img">
                                <img src="../images/brand-1.png" alt="" />

                            </div>
                        </div>

                    </Slider>
                </div>
                {/* End */}
                <Box />


            </Container>
        </div>
    );
}

export default Brand;

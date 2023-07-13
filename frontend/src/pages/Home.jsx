import React from "react";
import '../styles/home.css';
import { Container,Row,Col } from "reactstrap";
import heroImg from '../assets/images/hero-img1.jpeg';
import heroImg2 from '../assets/images/hero-img2.jpeg';
import heroVideo from '../assets/images/hero-video.mp4';
import mImg from '../assets/images/mImg.png';
import experienceImg from '../assets/images/experience.png';
// import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newletter from "../shared/Newsletter";

const Home=()=>{
    return <>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero_content">
                            <div className="hero_subtitle d-flex align-items-center">
                                <h2 className="explore">We Feel Travel</h2>
                                <img src={mImg} alt=""/>
                            </div>
                            <h1>
                                Leading the way in{" "}
                                <span className="highlight">adventure</span>
                            </h1>
                            <p>If you are looking for a memorable India trip, 
                            Travolic holiday packages are the right choice for you. 
                            Travolic offers 
                            the widest range of  
                            India tour packages to suit every kind of traveler from 
                            Delhi to US. 
                            Explore lots of tour packages to India with 
                            unbeatable deals and discounts. Explore the main India sightseeing points with the variety of experiential tours and activities included in Travolic’s India Tour Packages.</p>
                            <p></p>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero_img-box hero_subtitle">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero_img-box hero_subtitle mt-4">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero_img-box hero_subtitle mt-5">
                            <img src={heroImg2} alt=""/>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services_subtitle">What we serve</h5>
                        <h2 className="services_title">We offer our best services</h2>
                    </Col>
                    <ServiceList/>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5 ">
                        {/* <Subtitle  subtitle={"Explore"}/> */}
                        <h2 className="explore">Explore</h2>
                        <h2 className="featured_tour-title">Our featured tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience_content">
                            <h2 className="explore">Experience</h2>
                            <h2>With our all experience<br/>we will serve you</h2>
                            <p>loremdjg adgja agkdfj
                            <br/>
                            adig adgijeofigs agidjgoir agfisdfjgnal
                            </p>
                        </div>
                        <div className="counter_wrapper d-flex align-items-center gap-5">
                            <div className="counter_box">
                                <span>12k+</span>
                                <h6>Successful trip</h6>
                            </div>
                            <div className="counter_box">
                                <span>2k+</span>
                                <h6>Regular clients</h6>
                            </div>
                            <div className="counter_box">
                                <span>15</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                    <div className="experience_img">
                        <img src={experienceImg} alt=""/>
                    </div>

                    </Col>
                </Row>
            </Container>
        </section>

     <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className="explore">Gallery</h2>
                    <h2 className="gallery_title">Visit our customers tour gallery</h2>
                </Col>
                <Col lg='12'>
                     <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
     </section>

    
     <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className="explore">Fans Love</h2>
                    <h2 className="testimonial_title">What our fans say about us</h2>
                </Col>
                <Col lg='12'>
                     <Testimonials/>
                </Col>
            </Row>
        </Container>
     </section>

     <Newletter/>



    </>
};

export default Home;
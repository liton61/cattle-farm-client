import about from '../../assets/breadcrumb.jpg';
import AboutUs from './AboutUs';

const About = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={about} className="w-full" />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
            </div>
            <AboutUs></AboutUs>
        </div>
    );
};

export default About;
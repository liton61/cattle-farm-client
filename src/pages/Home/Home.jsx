import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import Slider from "../../components/Slider/Slider";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Search></Search>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
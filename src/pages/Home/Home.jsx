import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import Service from "../../components/Service/Service";
import Slider from "../../components/Slider/Slider";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Search></Search>
            <AboutUs></AboutUs>
            <Product></Product>
            <Service></Service>
        </div>
    );
};

export default Home;
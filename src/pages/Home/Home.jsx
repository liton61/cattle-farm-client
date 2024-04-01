import Banner from "../../components/Banner/Banner";
import Booking from "../../components/Booking/Booking";
import Brand from "../../components/Brand/Brand";
import Gallery from "../../components/Gallery/Gallery";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Product from "../../components/Product/Product";
import Quote from "../../components/Quote/Quote";
import Service from "../../components/Service/Service";
import Slider from "../../components/Slider/Slider";
import Team from "../../components/Team/Team";
import Video from "../../components/Video/Video";
import About from "../../components/About/About";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <About></About>
            <Product></Product>
            <Service></Service>
            <Quote></Quote>
            <Gallery></Gallery>
            <Video></Video>
            <Brand></Brand>
            <Team></Team>
            <Booking></Booking>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default Home;
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Booking from "../../components/Booking/Booking";
import Brand from "../../components/Brand/Brand";
import Farming from "../../components/Farming/Farming";
// import Cattle from "../../components/Cattle/Cattle";
import Gallery from "../../components/Gallery/Gallery";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Product from "../../components/Product/Product";
import Quote from "../../components/Quote/Quote";
// import Search from "../../components/Search/Search";
import Service from "../../components/Service/Service";
// import Slider from "../../components/Slider/Slider";
import Team from "../../components/Team/Team";
import Video from "../../components/Video/Video";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Farming></Farming>
            {/* <Slider></Slider> */}
            {/* <Search></Search> */}
            {/* <Cattle></Cattle> */}
            <AboutUs></AboutUs>
            <Product></Product>
            {/* <Search></Search> */}
            {/* <Cattle></Cattle> */}
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
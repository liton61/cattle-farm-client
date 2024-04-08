import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import slider1 from '../../assets/gallery-01.jpg'
import slider2 from '../../assets/gallery-02.jpg'
import slider3 from '../../assets/gallery-03.jpg'
import slider4 from '../../assets/gallery-04.jpg'
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-16'>
            <p className='font-bold text-green-900'>Farm Overview</p>
            <h1 className='lg:text-5xl md:text-5xl text-3xl font-bold pb-10 text-green-900'>FARM GALLERY</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider1} alt="" className="hover:opacity-75 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                            <Link to='/allPhotos'>
                                <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider2} alt="" className="hover:opacity-75 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                            <Link to='/allPhotos'>
                                <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider3} alt="" className="hover:opacity-75 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                            <Link to='/allPhotos'>
                                <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={slider4} alt="" className="hover:opacity-75 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                            <Link to='/allPhotos'>
                                <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;

import cow from '../../assets/cow (1).jpg';
import goat from '../../assets/goat.jpg';
import lamb from '../../assets/lamb.jpg';

const Cattle = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="relative">
                    <img src={cow} alt="" className="hover:opacity-75 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                        <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                    </div>
                </div>
                <div className="relative">
                    <img src={goat} alt="" className="hover:opacity-75 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                        <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                    </div>
                </div>
                <div className="relative">
                    <img src={lamb} alt="" className="hover:opacity-75 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                        <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cattle;
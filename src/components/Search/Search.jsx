import farm from '../../assets/farm.jpg';

const Search = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
            {/* <div className="bg-orange-400 py-10 flex justify-center items-center bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Ksm5sRz/bg.jpg)' }}>
                <div className="join">
                    <input className="input input-bordered focus:outline-none join-item" placeholder="Search Favorite Cattle" />
                    <button className="btn bg-green-900 text-yellow-200 join-item">Search <i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div> */}
            <div className="carousel w-full relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={farm} className="w-full h-[70vh]" />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="join">
                            <input className="input input-bordered focus:outline-none join-item" placeholder="Search Favorite Cattle" />
                            <button className="btn bg-green-900 hover:bg-green-800 text-yellow-200 join-item">Search <i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;

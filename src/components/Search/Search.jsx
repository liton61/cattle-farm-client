const Search = () => {
    return (
        <div className="lg:w-3/4 mx-auto pt-10 lg:px-0 px-5">
            <div className="bg-orange-400 py-10 flex justify-center items-center bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Ksm5sRz/bg.jpg)' }}>
                <div className="join">
                    <input className="input input-bordered focus:outline-none join-item" placeholder="Search Favorite Cattle" />
                    <button className="btn bg-green-900 text-yellow-200 join-item">Search <i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Search;

/* eslint-disable react/no-unescaped-entities */


const Shop = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/vd5Rgrp/service-01.jpg)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black bg-opacity-50 lg:p-10 md:p-10 p-3 rounded">
                        <h1 className="mb-5 text-4xl font-bold">HAPPY SHOPPING</h1>
                        <p className="mb-5 text-yellow-200">Farming is not just a livelihood, it's a legacy we sow today for future generations to reap !!!</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
                <div className="bg-orange-400 py-10 flex justify-center items-center bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Ksm5sRz/bg.jpg)' }}>
                    <div className="join">
                        <input className="input input-bordered focus:outline-none join-item" placeholder="Search Your Product" />
                        <button className="btn bg-green-900 text-yellow-200 join-item">Search <i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
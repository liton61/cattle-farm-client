/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";


const Shop = () => {
    const [shop, setShop] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/shop')
            .then(res => res.json())
            .then(data => setShop(data))
    }, [])
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
            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {shop.map(shop => (<div key={shop._id} className="card card-compact bg-base-100 shadow-xl rounded-none">
                        <figure><img className="h-36" src={shop.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{shop.title}</h2>
                            <p className="font-medium text-gray-600">Price : {shop.price} Tk</p>
                            <div className="card-actions justify-center gap-10">
                                <button><i className="fa-solid fa-cart-plus text-xl text-green-700"></i></button>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()}><i className="fa-solid fa-eye text-xl text-green-700"></i></button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                                <button><i className="fa-solid fa-heart text-xl text-green-700"></i></button>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
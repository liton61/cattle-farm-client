/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";


const Cow = () => {
    const [cow, setCow] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cow')
            .then(res => res.json())
            .then(data => setCow(data))
    }, [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/KjSGr6V/hero-1.jpg)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black bg-opacity-50 lg:p-10 md:p-10 p-3 rounded">
                        <h1 className="mb-5 text-4xl font-bold">HAPPY FARMING</h1>
                        <p className="mb-5 text-yellow-200">Farming is not just a livelihood, it's a legacy we sow today for future generations to reap !!!</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {cow.map(cow => (<div key={cow._id} className="card card-compact bg-base-100 shadow-xl rounded-none">
                        <figure><img src={cow.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cow.title}
                                <div className="badge badge-secondary">Weight : {cow.weight} Kg</div>
                            </h2>
                            <p className="font-medium text-gray-600">Price : {cow.price} Tk</p>
                            <p className="font-medium text-gray-600">Age : {cow.age} Months Tk</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-green-900 hover:bg-green-800 text-yellow-200 w-full uppercase">Book Now</button>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default Cow;
import { useEffect, useState } from "react";


const Cattle = () => {
    const [cattle, setCattle] = useState([]);
    useEffect(() => {
        fetch('cattle.json')
            .then(res => res.json())
            .then(data => setCattle(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 pt-16">
            <h1 className="text-4xl font-bold text-center pb-5 text-green-900">Cattle Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cattle.map((cattle, index) => (
                    <div key={index}>
                        <div className="relative">
                            <img className="w-full h-60 mx-auto hover:opacity-75 transition-opacity duration-500" src={cattle.image} alt="" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white cursor-pointer">
                                <i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i>
                            </div>
                        </div>
                        <h3 className="text-center text-2xl font-bold">{cattle.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cattle;
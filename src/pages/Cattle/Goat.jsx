import { useEffect, useState } from "react";
import banner from '../../assets/Goat-Farming.jpg';

const Goat = () => {
    const [goat, setGoat] = useState([]);
    useEffect(() => {
        fetch('cattle.json')
            .then(res => res.json())
            .then(data => {
                const filteredGoat = data.filter(cattle => cattle.category === 'goat');
                setGoat(filteredGoat);
            })
    }, [])
    return (
        <div>

            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 mt-5 pb-16'>
                <div className="carousel w-full pb-16">
                    <div id="slide1" className="carousel-item relative w-full h-[70vh]">
                        <img src={banner} className="w-full" />
                        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <div className="bg-black bg-opacity-50 lg:p-10 md:p-10 p-3 rounded">
                                <h1 className="text-3xl font-bold text-yellow-200">GOAT COLLECTION</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {goat.map(goat => (
                        <div key={goat.id}>
                            <div className='shadow-md'>
                                <img className='w-full' src={goat.image} alt="" />
                                <div className='p-5'>
                                    <h1 className='text-xl font-bold'>{goat.title}</h1>
                                    <p className='text-sm font-medium text-gray-500'>Price : {goat.price} Tk</p>
                                    <p className='text-sm font-medium text-gray-500'>Weight : {goat.weight} Kg</p>
                                    <p className='text-sm font-medium text-gray-500'>Age : {goat.age} Months</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Goat;
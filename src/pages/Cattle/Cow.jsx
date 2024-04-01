import { useEffect, useState } from 'react';
import banner from '../../assets/hero-1.jpg';

const Cow = () => {
    const [cow, setCow] = useState([]);
    useEffect(() => {
        fetch('cattle.json')
            .then(res => res.json())
            .then(data => {
                const filteredCows = data.filter(cattle => cattle.category === 'cow');
                setCow(filteredCows);
            })
    }, [])
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-full" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="bg-black bg-opacity-50 lg:p-10 md:p-10 p-3 rounded">
                            <h1 className="text-3xl font-bold text-yellow-200">COW COLLECTION</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 mt-5 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {cow.map(cow => (
                        <div key={cow.id}>
                            <div className='shadow-md'>
                                <img className='w-full' src={cow.image} alt="" />
                                <div className='p-5'>
                                    <h1 className='text-xl font-bold'>{cow.title}</h1>
                                    <p className='text-sm font-medium text-gray-500'>Price : {cow.price} Tk</p>
                                    <p className='text-sm font-medium text-gray-500'>Weight : {cow.weight} Kg</p>
                                    <p className='text-sm font-medium text-gray-500'>Age : {cow.age} Months</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cow;
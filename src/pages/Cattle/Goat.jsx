import { useEffect, useState } from "react";
import banner from '../../assets/breadcrumb.jpg';

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
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner} className="w-full" />
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
        </div>
    );
};

export default Goat;
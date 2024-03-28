import icon1 from '../../assets/features-icon-01.png';
import icon2 from '../../assets/features-icon-02.png';
import icon3 from '../../assets/features-icon-03.png';

const Farming = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
            <marquee>বাংলাদেশের মধ্যে সব থেকে বিশ্বাস যোগ্য গবাদি পশুর খামার</marquee>
            <div className="bg-yellow-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                <div className='text-center px-5 lg:border-r md:border-r border-green-900'>
                    <div className='flex justify-center'>
                        <img className='border-dashed border-2 border-green-900 rounded-full p-7' src={icon1} alt="" />
                    </div>
                    <h2 className='text-xl font-bold mt-7'>SUPERIOR PRODUCTS</h2>
                    <p className='mt-3'>A content farm is a company that employs large numbers.</p>
                    <button className='font-bold mt-3 text-green-900'>READ MORE <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='text-center px-5 lg:border-r border-green-900'>
                    <div className='flex justify-center'>
                        <img className='border-dashed border-2 border-green-900 rounded-full p-7' src={icon2} alt="" />
                    </div>
                    <h2 className='text-xl font-bold mt-7'>FULLY PURE & FRESH</h2>
                    <p className='mt-3'>A content farm is a company that employs large numbers.</p>
                    <button className='font-bold mt-3 text-green-900'>READ MORE <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='text-center px-5'>
                    <div className='flex justify-center'>
                        <img className='border-dashed border-2 border-green-900 rounded-full p-7' src={icon3} alt="" />
                    </div>
                    <h2 className='text-xl font-bold mt-7'>BEST QUALITY PROVIDER</h2>
                    <p className='mt-3'>A content farm is a company that employs large numbers.</p>
                    <button className='font-bold mt-3 text-green-900'>READ MORE <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Farming;
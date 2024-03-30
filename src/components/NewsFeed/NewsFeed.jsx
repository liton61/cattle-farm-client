/* eslint-disable react/no-unescaped-entities */
import news1 from '../../assets/news-01.jpg';

const NewsFeed = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-16">
            <h5 className='text-center font-medium text-green-900'>News Feed</h5>
            <h1 className='text-4xl font-bold text-center mb-10 text-green-900'>FARM BLOG & INSIGHTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className='shadow-md'>
                    <img src={news1} alt="" />
                    <div className='p-5'>
                        <i className="fa-solid fa-calendar-days text-green-800"></i><span className='text-sm font-medium mr-10'> May 20, 2022</span>
                        <i className="fa-solid fa-user text-green-900"></i>
                        <span className='font-medium'> Liton Mia</span>
                        <h1 className='text-md font-bold pt-5 text-justify'>NATURAL LEADERS WHO &
                            THRIVE AT INFLUENCING</h1>
                    </div>
                </div>
                <div className='shadow-md'>
                    <img src={news1} alt="" />
                    <div className='p-5'>
                        <i className="fa-solid fa-calendar-days text-green-800"></i><span className='text-sm font-medium mr-10'> May 20, 2022</span>
                        <i className="fa-solid fa-user text-green-900"></i>
                        <span className='font-medium'> Liton Mia</span>
                        <h1 className='text-l font-bold pt-5 text-justify'>NATURAL LEADERS WHO &
                            THRIVE AT INFLUENCING</h1>
                    </div>
                </div>
                <div className='shadow-md'>
                    <img src={news1} alt="" />
                    <div className='p-5'>
                        <i className="fa-solid fa-calendar-days text-green-800"></i><span className='text-sm font-medium mr-10'> May 20, 2022</span>
                        <i className="fa-solid fa-user text-green-900"></i>
                        <span className='font-medium'> Liton Mia</span>
                        <h1 className='text-l font-bold pt-5 text-justify'>NATURAL LEADERS WHO &
                            THRIVE AT INFLUENCING</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;
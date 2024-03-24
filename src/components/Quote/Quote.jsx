import cta from '../../assets/cta-icon-01.png';

const Quote = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-16'>
            <div className='lg:flex md:flex justify-between'>
                <div>
                    <div className='flex items-center gap-5'>
                        <img src={cta} alt="" />
                        <h1 className='text-3xl font-bold'>WE’RE CARING ABOUT OUR <br />
                            FARM GROWTH</h1>
                    </div>
                    <p className='pt-5'>We have been working in this industry for more <br /> than 30 years with trust and honesty. All hands <br /> must be on deck if we are to achieve</p>
                </div>
                <div className='lg:pt-0 md:pt-0 pt-5'>
                    <button className='bg-green-900 text-yellow-200 px-4 py-3 rounded font-bold'>GET A QUOTE <i className="fa-solid fa-arrow-right text-yellow-200 font-bold"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Quote;
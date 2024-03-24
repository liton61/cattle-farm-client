import about1 from '../../assets/about-img-01.jpg'
import about2 from '../../assets/about-img-02.jpg'

const AboutUs = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div>
                    <div className='lg:absolute'>
                        <img src={about1} alt="" />
                    </div>
                    <div className='lg:relative lg:transform lg:translate-y-1/2 left-1/3 lg:-bottom-72 lg:pt-0 pt-5'>
                        <img src={about2} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <h5>About Us</h5>
                        <h1 className='text-5xl font-bold'>KNOW ABOUT OUR FARM & HISTORY</h1>
                        <p className='text-justify py-5'>We have been working in this industry for more than 30 years with trust and honesty. All hands must be on deck if we are to achieve our goal of improving global nutrition.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <h3 className='text-xl font-medium'>OUR MISSION</h3>
                            <ul className='py-3'>
                                <li><i className="fa-solid fa-check text-green-500"></i> High-quality work</li>
                                <li><i className="fa-solid fa-check text-green-500"></i> Straightforward pricing</li>
                                <li><i className="fa-solid fa-check text-green-500"></i> Rapid response times</li>
                            </ul>
                        </div>
                        <div className='bg-yellow-300 rounded'>
                            <h1 className='text-8xl font-bold text-center'>6</h1>
                            <p className='text-center font-medium pb-5'>Years+ Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
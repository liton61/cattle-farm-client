import about from '../../assets/about-thumb-01.jpg';
import liton from '../../assets/liton.jpg';
import sumon from '../../assets/sumon.png';
import Service from '../Service/Service';
import Journey from './Journey';

const AboutUs = () => {
    return (
        <div>
            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                    <div>
                        <img className='h-full' src={about} alt="" />
                    </div>
                    <div>
                        <h5 className='font-medium text-green-900'>About Us</h5>
                        <h1 className='text-5xl font-bold text-green-900 py-5'>HAVE MORE THAN 20+ YEARS</h1>
                        <p className='text-justify'>However, like much of agriculture, dairy farms come in a wide range of sizes. The largest U.S. dairy farms have over 15,000 cows, though farms with 1,000–5,000 cows are more common. Register your dairy business with respective authorities.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-5'>
                            <div>
                                <img className='w-20 h-20 mx-auto rounded-full border border-green-900' src={liton} alt="" />
                                <h3 className='text-xl font-bold text-center text-green-900'>Liton Mahmud</h3>
                                <h5 className='font-medium text-sm text-center'>Founder & CEO</h5>
                            </div>
                            <div>
                                <img className='w-20 h-20 mx-auto rounded-full border border-green-900' src={sumon} alt="" />
                                <h3 className='text-xl font-bold text-center text-green-900'>Sumon Ismail</h3>
                                <h5 className='font-medium text-sm text-center'>Managing Director</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Service></Service>
            <Journey></Journey>
        </div>
    );
};

export default AboutUs;
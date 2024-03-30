import contact from '../../assets/breadcrumb.jpg';
import call from '../../assets/call.png';
import Booking from '../../components/Booking/Booking';

const Contact = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={contact} className="w-full" />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
            </div>
            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='border-dashed border-2 border-green-900 py-5 bg-yellow-200'>
                        <div className='flex justify-center'>
                            <img className='bg-green-900 p-10 rounded-full' src={call} alt="" />
                        </div>
                        <div className='text-center pt-5'>
                            <h1 className='text-xl font-bold text-green-900 pb-5'>CALL US HERE</h1>
                            <p>+090 8909 89 87-0</p>
                            <p>+090 8909 89 87-0</p>
                        </div>
                    </div>
                    <div className='border-dashed border-2 border-green-900 py-5 bg-yellow-200'>
                        <div className='flex justify-center'>
                            <img className='bg-green-900 p-10 rounded-full' src={call} alt="" />
                        </div>
                        <div className='text-center pt-5'>
                            <h1 className='text-xl font-bold text-green-900 pb-5'>EMAIL ADDRESS</h1>
                            <p>info@webexample.com</p>
                            <p>jobs@query-design.com</p>
                        </div>
                    </div>
                    <div className='border-dashed border-2 border-green-900 py-5 bg-yellow-200'>
                        <div className='flex justify-center'>
                            <img className='bg-green-900 p-10 rounded-full' src={call} alt="" />
                        </div>
                        <div className='text-center pt-5'>
                            <h1 className='text-xl font-bold text-green-900 pb-5'>OFFICE ADDRESS</h1>
                            <p>14/A, New Humble Town,<br />NYC, USA</p>
                        </div>
                    </div>
                    <div className='border-dashed border-2 border-green-900 py-5 bg-yellow-200'>
                        <div className='flex justify-center'>
                            <img className='bg-green-900 p-10 rounded-full' src={call} alt="" />
                        </div>
                        <div className='text-center pt-5'>
                            <h1 className='text-xl font-bold text-green-900 pb-5'>SOCIAL CONNECT</h1>
                            <p>skype.com/humble.cc</p>
                            <p>linkdin.com/hamble.007</p>
                        </div>
                    </div>
                </div>
            </div>
            <Booking></Booking>
        </div>
    );
};

export default Contact;
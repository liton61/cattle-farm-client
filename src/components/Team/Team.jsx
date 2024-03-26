import liton from '../../assets/liton.jpg';
import lia from '../../assets/lia.jpg';
import sumon from '../../assets/sumon.png';

const Team = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 pt-16'>
            <h1 className='text-3xl font-bold text-center pb-5 text-green-900'>Meet Our Team</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-yellow-200 shadow-xl text-green-900 rounded'>
                    <div className='flex justify-center pt-5'>
                        <img className='h-52 w-52 rounded-full' src={liton} alt="" />
                    </div>
                    <div className='py-5'>
                        <h3 className='text-2xl font-bold text-center'>Liton Mahmud</h3>
                        <h5 className='text-center font-medium text-sm'>Founder & CEO</h5>
                    </div>
                    <div className="flex justify-center gap-10 pb-5">
                        <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
                <div className='bg-yellow-200 shadow-xl text-green-900 rounded'>
                    <div className='flex justify-center pt-5'>
                        <img className='h-52 w-52 rounded-full' src={lia} alt="" />
                    </div>
                    <div className='py-5'>
                        <h3 className='text-2xl font-bold text-center'>Lia Mahmud</h3>
                        <h5 className='text-center font-medium text-sm'>Advisor</h5>
                    </div>
                    <div className="flex justify-center gap-10 pb-5">
                        <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
                <div className='bg-yellow-200 shadow-xl text-green-900 rounded'>
                    <div className='flex justify-center pt-5'>
                        <img className='h-52 w-52 rounded-full' src={sumon} alt="" />
                    </div>
                    <div className='py-5'>
                        <h3 className='text-2xl font-bold text-center'>Sumon Ismail</h3>
                        <h5 className='text-center font-medium text-sm'>Managing Director</h5>
                    </div>
                    <div className="flex justify-center gap-10 pb-5">
                        <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
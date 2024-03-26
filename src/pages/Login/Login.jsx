/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';

const Login = () => {
    return (
        <div className='flex items-center justify-center lg:h-screen'>
            <div className="lg:w-[500px] md:w-[500px] w-full p-10 bg-green-900 rounded">
                <h1 className='text-center text-3xl font-bold mb-3 text-yellow-200'>Login</h1>
                <form>
                    <div className="w-full mb-3">
                        <label className="font-medium text-white">Email</label>
                        <input type="text" placeholder="Your Email" className="input input-bordered border-none w-full focus:outline-none rounded" required />
                    </div>
                    <div className="w-full mb-3">
                        <label className="font-medium text-white">Password</label>
                        <input type="text" placeholder="Your Password" className="input input-bordered border-none w-full focus:outline-none rounded" required />
                    </div>
                    <button className="btn bg-yellow-200 w-full font-bold text-green-900 mt-5 hover:bg-yellow-200 rounded">Login</button>
                    <button className="btn bg-yellow-200 w-full font-bold text-green-900 mt-7 hover:bg-yellow-200 rounded">Google Login <img className='w-8' src={google} alt="" /></button>
                    <p className='text-center text-sm text-white mt-5'>Don't have an account? <Link to="/register" className='text-yellow-200'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
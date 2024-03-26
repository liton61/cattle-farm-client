import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='flex items-center justify-center lg:h-screen'>
            <div className="lg:w-[500px] md:w-[500px] w-full p-10 bg-green-900 rounded">
                <h1 className='text-center text-3xl font-bold mb-3 text-yellow-200'>Register</h1>
                <form>
                    <div className="w-full mb-3">
                        <label className="font-medium text-white">Name</label>
                        <input type="text" placeholder="Your Name" className="input input-bordered border-none w-full focus:outline-none rounded" required />
                    </div>
                    <div className="w-full mb-3">
                        <label className="font-medium text-white">Email</label>
                        <input type="text" placeholder="Your Email" className="input input-bordered border-none w-full focus:outline-none rounded" required />
                    </div>
                    <div className="w-full mb-3">
                        <label className="font-medium text-white">Password</label>
                        <input type="text" placeholder="Your Password" className="input input-bordered border-none w-full focus:outline-none rounded" required />
                    </div>
                    <div className="w-full mb-3">
                        <label className="font-medium text-white">Photo URL</label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered border-none w-full focus:outline-none rounded" required />
                    </div>
                    <button className="btn bg-yellow-200 w-full font-bold text-green-900 mt-5 hover:bg-yellow-200 rounded">Register</button>
                    <p className='text-center text-sm text-white mt-5'>Already have an account? <Link to="/login" className='text-yellow-200'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
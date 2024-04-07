import { useContext } from 'react';
import phone from '../../assets/phone-icon.png';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from "sweetalert2";
import { AuthContext } from '../../authentication/Provider/AuthProvider';

const Appointment = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const call = form.call.value;
        const date = form.date.value;
        const userPhoto = user.photoURL;
        const userInfo = { name, email, call, date, userPhoto };
        // console.log(userInfo);

        axiosSecure.post('/appointment', userInfo)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job !",
                        text: "You have successfully submitted !",
                        icon: "success"
                    });
                }
                form.reset();

            })
    }
    return (
        <div className="lg:w-3/4 mx-auto px-5 bg-green-900 p-5 my-16">
            <p className="font-medium text-yellow-200">Customer Request</p>
            <h1 className="text-4xl font-bold text-yellow-200 pb-10">BOOK AN APPOINTMENT</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <form onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <i className="fa-regular fa-user"></i>
                        <input type="text" id='name' className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <i className="fa-regular fa-envelope"></i>
                        <input type="text" id='email' className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-5">
                        <i className="fa-solid fa-phone"></i>
                        <input type="text" id='call' className="grow" placeholder="Call" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <i className="fa-solid fa-calendar-days"></i>
                        <input type="date" id='date' className="grow" />
                    </label>
                    <div>
                        <button className='bg-yellow-200 text-green-900 px-4 py-3 rounded font-bold mt-5'>GET APPOINTMENT <i className="fa-solid fa-arrow-right text-green-900 font-bold"></i></button>
                    </div>
                </form>
                <div className="bg-yellow-200 rounded">
                    <div className='flex items-center gap-7 lg:px-10 px-5 py-5'>
                        <div className='border-dashed border-2 border-green-900 rounded-full p-7'>
                            <img src={phone} alt="" />
                        </div>
                        <div>
                            <p>Or Call Us Now</p>
                            <h3 className='text-2xl font-bold'>01738751356</h3>
                        </div>
                    </div>
                    <p className='px-10 lg:pb-0 pb-5 text-justify'>Give us a call to ask for online advice or book a physical schedule at dairy press soon.</p>
                    <div className='lg:px-10 px-5 lg:mt-5 lg:mb-0 mb-5'>
                        <i className="fa-solid fa-location-dot bg-green-900 px-7 py-5 text-2xl text-yellow-200 rounded"></i>
                        <button className='font-bold ml-5'>VIEW ON GOOGLE MAP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
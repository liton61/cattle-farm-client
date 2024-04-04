import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const BookingForm = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const weight = form.weight.value;
        const category = form.category.value;
        const age = form.age.value;
        const details = form.details.value;

        const bookingInfo = { name, email, date, phone, price, weight, category, age, details };
        // console.log(bookingInfo);

        axiosSecure.post('/booking', bookingInfo)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job !",
                        text: "You have successfully booked !",
                        icon: "success"
                    });
                }
                form.reset();
                navigate('/payment');

            })
    }
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
            <form onSubmit={handleSubmit} className="p-10 shadow-md rounded">
                <div className="flex gap-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Full Name</label>
                        <input id="name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full focus:outline-none" required />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Email Address</label>
                        <input id="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full focus:outline-none" required />
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Booking Date</label>
                        <input id="date" type="date" placeholder="Date" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Phone Number</label>
                        <input id="phone" type="text" placeholder="Phone" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle Price</label>
                        <input id="price" type="text" placeholder="Price" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle weight</label>
                        <input id="weight" type="text" placeholder="Weight" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle Category</label>
                        <select id="category" className="select select-bordered focus:outline-none w-full">
                            <option disabled selected>Select</option>
                            <option>Cow</option>
                            <option>Goat</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle Age</label>
                        <input id="age" type="text" placeholder="Age" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <label className=" font-bold text-md">Write Details</label>
                    <textarea id="details" className="textarea textarea-bordered w-full focus:outline-none" placeholder="Details" required></textarea>
                </div>
                <div className="mt-5">
                    <button className="btn bg-green-900 hover:bg-green-800 text-yellow-200 w-full">Booking</button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
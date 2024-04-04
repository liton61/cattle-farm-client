import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";


const Booking = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
            <form className="p-10 shadow-md rounded">
                <div className="flex gap-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Full Name</label>
                        <input type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Email Address</label>
                        <input type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Booking Date</label>
                        <input type="date" placeholder="Date" className="input input-bordered w-full focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Phone Number</label>
                        <input type="text" placeholder="Phone" className="input input-bordered w-full focus:outline-none" />
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle Price</label>
                        <input type="text" placeholder="Price" className="input input-bordered w-full focus:outline-none" />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle weight</label>
                        <input type="text" placeholder="Weight" className="input input-bordered w-full focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mt-5">
                    <label className=" font-bold text-md">Write Details</label>
                    <textarea className="textarea textarea-bordered w-full focus:outline-none" placeholder="Details"></textarea>
                </div>
                <div className="mt-5">
                    <button className="btn bg-green-900 hover:bg-green-800 text-yellow-200 w-full">Booking</button>
                </div>
            </form>
        </div>
    );
};

export default Booking;
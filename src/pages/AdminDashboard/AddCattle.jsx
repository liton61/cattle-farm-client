import Axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from 'sweetalert2';

const image_hosting_key = '7d139a3c13136ce3482f9b40c2af1c54';
const image_hosting_api = `https:api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCattle = () => {
    const axios = useAxiosPublic();

    const handleAdd = async e => {
        e.preventDefault()
        const form = e.target;
        let imageUrl;

        const formData = new FormData();
        const title = form.title.value;
        const price = parseFloat(form.price.value);
        const weight = form.weight.value;
        const age = form.age.value;
        const category = form.category.value;
        const image = form.image.files[0];
        formData.append('image', image);


        const response = await Axios.post(image_hosting_api, formData);
        imageUrl = response.data.data.url;

        const cattleData = { image: imageUrl, title, price, weight, age, category };
        // console.log('cattleData', cattleData)

        axios.post('/cattle', cattleData)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Cattle has been added !',
                });
                form.reset();
            })
    }
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
            <form onSubmit={handleAdd} className="p-10 shadow-md rounded">
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Title</label>
                        <input id="title" type="text" placeholder="Title" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle Price</label>
                        <input id="price" type="text" placeholder="Price" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                </div>
                <div className="lg:flex gap-5 mt-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle weight</label>
                        <input id="weight" type="text" placeholder="Weight" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle Age</label>
                        <input id="age" type="text" placeholder="Age" className="input input-bordered w-full focus:outline-none" required />
                    </div>
                </div>
                <div className="lg:flex gap-5 mt-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Cattle Category</label>
                        <select className="select select-bordered w-full focus:outline-none" id="category">
                            <option disabled selected>Select</option>
                            <option>cow</option>
                            <option>goat</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Add Photo</label>
                        <input id="image" type="file" placeholder="Category" className="input input-bordered w-full focus:outline-none pt-2" required />
                    </div>
                </div>
                <div className="mt-5">
                    <button className="btn btn-success w-full uppercase">Add Cattle</button>
                </div>
            </form>
        </div>
    );
};

export default AddCattle;
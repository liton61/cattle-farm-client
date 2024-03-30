/* eslint-disable react/prop-types */


const ServiceCard = ({ service }) => {
    const { title, image, description } = service;
    return (
        <div className="border-b-2 border-yellow-200">
            <img className="w-52 mx-auto" src={image} alt="" />
            <h2 className="text-2xl font-semibold text-center pt-5">{title}</h2>
            <p className="text-center py-3">{description}</p>
            <div className="card-actions justify-center pb-3">
                <button className=""><i className="fa-solid fa-arrow-right text-4xl font-extrabold text-green-900"></i></button>
            </div>
        </div>
    );
};

export default ServiceCard;
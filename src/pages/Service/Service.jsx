import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-16">
            <p className="text-center font-bold text-green-900">Service</p>
            <h1 className="text-4xl font-bold text-center pb-10 text-green-900">WHAT WE PROVIDE</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
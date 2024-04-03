import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCow = () => {
    const axiosPublic = useAxiosPublic();
    const { data: cow = [], isPending: loading, refetch } = useQuery({
        queryKey: ['cow'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cow');
            return res.data;
        }
    })
    return [cow, loading, refetch]
};

export default useCow;
import axios from "axios";
import { useQuery } from "react-query";

const useTasks = () => {

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get('https://task-management-server-0cxv.onrender.com/tasks')
            return res.data;
        }
    })

    return { tasks, isLoading, refetch }
};

export default useTasks;
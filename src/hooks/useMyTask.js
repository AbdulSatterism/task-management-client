import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from 'react-query';
import axios from 'axios';

const useMyTask = () => {
    const { user } = useContext(AuthContext);

    const { data: myTasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://task-management-server-0cxv.onrender.com/tasks-by-email?email=${user?.email}`)
            return res.data;
        }
    })
    return { myTasks, isLoading, refetch }
};

export default useMyTask;
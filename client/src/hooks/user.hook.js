import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { apiInstance } from '../api';


export const useGetAllUsers=()=>{
    
    const user=useQuery({
        queryKey:['registerUser'],
        queryFn:async()=>{
            const {data}=await apiInstance.get('/api/users');
            return data.data;
        }
    });
    return user;
}

export const useRegisterUser=()=>{
    const queryClient=useQueryClient();
    const user=useMutation({
        mutationFn:async({firstName,lastName,email,dob})=>{
            const {data}=await apiInstance.post('/api/users',{firstName,lastName,email,dob});
            return data;
        },
        onSuccess:async()=>{
            await queryClient.invalidateQueries({queryKey:['registerUser']});
        }
    })
    return user;
}

export const useUpdateUser=()=>{
    const queryClient=useQueryClient();
    const user=useMutation({
        mutationFn:async({id,firstName,lastName,email,dob})=>{
            console.log(firstName);
            
            const {data:response}=await apiInstance.patch(`/api/users/${id}`,{firstName,lastName,email,dob});
            return response.data;
        },
        onSuccess:async()=>{
            await queryClient.invalidateQueries({queryKey:['registerUser']});
        }
    });
    return user;
}

export const useDeleteUser=(id)=>{
    const queryClient=useQueryClient();
    const user=useMutation({
        mutationFn:async(id)=>{
            const {data}=await apiInstance.delete(`/api/users/${id}`);
            return data;
        },
        onSuccess:async()=>{
            await queryClient.invalidateQueries({queryKey:['registerUser']});
        }
    });
    return user;
}
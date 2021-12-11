import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastMsg =() =>{
    return(        
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    );
}

export function handleErro(text){
    toast.error(text);
}

export function handleSuccess(text){
    toast.success(text);
}
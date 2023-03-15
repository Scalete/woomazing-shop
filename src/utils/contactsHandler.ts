import axios from "axios";
import Cookies from "js-cookie";
import { IFormData } from "../redux/globalIntefaces";

export const handleSubmitForm = (setOnLoadingResponseData: React.Dispatch<React.SetStateAction<boolean>>, setformResponseData: React.Dispatch<React.SetStateAction<string>>) => async (dataForm: IFormData) => {
    
    interface AxiosProp {
        message: string;
    }
    
    const cookieValue = Cookies.get('contact-form-date'); 

    if(!cookieValue) {
        setOnLoadingResponseData(true);
        const { data } = await axios.post<AxiosProp>(`http://localhost:3001/form-data`, dataForm);

        Cookies.set('contact-form-date', 'true', { expires: 1 });
        setformResponseData(data.message);
        setOnLoadingResponseData(false);
    } else {
        setformResponseData('Вы уже отправляли данные сегодня');
    }
};
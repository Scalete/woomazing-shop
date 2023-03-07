import axios from "axios";
import Cookies from "js-cookie";
import { IFormData } from "../redux/globalIntefaces";

export const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setFormData: React.Dispatch<React.SetStateAction<IFormData>>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
};

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, setOnLoadingResponseData: React.Dispatch<React.SetStateAction<boolean>>, setformResponseData: React.Dispatch<React.SetStateAction<string>>, formData: IFormData) => {
    event.preventDefault();
    
    interface AxiosProp {
        message: string;
    }
    
    const cookieValue = Cookies.get('contact-form-date'); 

    if(!cookieValue) {
        setOnLoadingResponseData(true);
        const { data } = await axios.post<AxiosProp>(`http://localhost:3001/form-data`, formData);

        Cookies.set('contact-form-date', 'true', { expires: 1 });
        setformResponseData(data.message);
        setOnLoadingResponseData(false);
    } else {
        setformResponseData('Вы уже отправляли данные сегодня');
    }
};
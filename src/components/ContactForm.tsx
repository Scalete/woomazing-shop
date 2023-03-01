import axios from 'axios';
import React from 'react';
import { DataFormContext } from '../context/Contex';
import Cookies from 'js-cookie';

export const ContactForm: React.FC = () => {    

    interface IFormData {
        name: string;
        email: string;
        tel: string;
    }

    const [formData, setFormData] = React.useState<IFormData>({
        name: '',
        email: '',
        tel: ''
    });

    const {activeForm, setActiveForm} = React.useContext(DataFormContext);
    const [formResponseData, setformResponseData] = React.useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        
        interface AxiosProp {
            message: string;
        }
        
        const cookieValue = Cookies.get('contact-form-date'); 

        if(!cookieValue) {
            const { data } = await axios.post<AxiosProp>(`http://localhost:3001/form-data`, formData);

            Cookies.set('contact-form-date', 'true', { expires: 1 });
            setformResponseData(data.message);
        } else {
            setformResponseData('Вы уже отправляли данные сегодня');
        }
    };

    const onClose = () => {
        if(setActiveForm) {
            setActiveForm(prev => !prev)
            setFormData({
                name: '',
                email: '',
                tel: ''
            });
            setTimeout(() => {
                setformResponseData('');
            }, 500);
        }
    }

    return (
        <div className={`contact-form ${activeForm ? 'active': ''}`}>
            <form style={formResponseData? {width: '600px', maxWidth: 'initial'}: undefined} onSubmit={handleSubmit}>
                {formResponseData ? '': <svg onClick={onClose} className='close-btn' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 14.5 14.5m0-14.5L1 15.5" stroke="#000"/></svg>}
                <h2>{formResponseData ? formResponseData: 'Заказать обратный звонок'}</h2>
                {
                    formResponseData ? <div className='action second' onClick={onClose}>Закрыть</div>: (
                        <>
                            <input type="text" name="name" placeholder="Имя" autoComplete="off" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="E-mail" autoComplete="off" value={formData.email} onChange={handleChange}  required />
                            <input type="text" name="tel" placeholder="Телефон" autoComplete="off" value={formData.tel} onChange={handleChange} required />
                            <button className='action main' type="submit">Заказать звонок</button>
                        </>
                    )
                }
            </form>
        </div>
    );
};
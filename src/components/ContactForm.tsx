import React from 'react';
import { IDataFormProps, IFormData } from '../redux/globalIntefaces';
import { handleSubmitForm } from '../utils/contactsHandler';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const ContactForm: React.FC<IDataFormProps> = ({activeForm, setActiveForm}) => {    

    const schema = yup.object().shape({
        name: yup.string().min(2, "Имя должно содержать минимум 2 буквы").required("Введите имя"),
        email: yup.string().email("Введите корректный e-mail").max(30, "Максимальное количество символов: 30").required("Введите e-mail"),
        tel: yup.string().matches(/^\+?\d{1,4}[-.\s]?\d{1,20}$/, "Введите корректный телефон").required("Введите телефон")
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormData>({
        defaultValues: {
            name: '',
            email: '',
            tel: '',
        },
        resolver: yupResolver(schema)
    });

    const [formResponseData, setformResponseData] = React.useState<string>('');
    const [onLoadingResponseData, setOnLoadingResponseData] = React.useState<boolean>(false);

    const onClose = () => {
        if(setActiveForm) {
            setActiveForm(prev => !prev);
            reset();
            setTimeout(() => {
                setformResponseData('');
            }, 500);
        }
    }

    return (
        <div className={`contact-form ${activeForm ? 'active': ''}`}>
            <form className='main' style={formResponseData? {width: '600px', maxWidth: 'initial'}: undefined} onSubmit={handleSubmit(handleSubmitForm(setOnLoadingResponseData, setformResponseData))}>
                {formResponseData ? '': <svg onClick={onClose} className='close-btn' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 14.5 14.5m0-14.5L1 15.5" stroke="#000"/></svg>}
                <h2>{formResponseData ? formResponseData: 'Заказать обратный звонок'}</h2>
                {
                    formResponseData ? <div className='action second' onClick={onClose}>Закрыть</div>: (
                        <>
                            <div>
                                <input type="text" placeholder='Имя' {...register('name', { required: true })} />
                                {errors.name && <span>{`${errors.name.message}`}</span>}
                            </div>
                            <div>
                                <input type="email" placeholder='E-mail' {...register('email', { required: true })} />
                                {errors.email && <span>{`${errors.email.message}`}</span>}
                            </div>
                            <div>
                                <input type="text" placeholder='Телефон' {...register('tel', { required: true })} />
                                {errors.tel && <span>{`${errors.tel.message}`}</span>}
                            </div>
                            <button className='action main' type="submit">{onLoadingResponseData ? <img style={{maxHeight: "20px"}} src={`${process.env.REACT_APP_PUBLIC_URL}images/loadingGif.gif`} alt="Loading"></img>: 'Заказать звонок'}</button>
                        </>
                    )
                }
            </form>
        </div>
    );
};
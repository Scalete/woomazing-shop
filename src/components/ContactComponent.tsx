import React from 'react';
import { IFormData } from '../redux/globalIntefaces';
import { handleSubmitForm } from '../utils/contactsHandler';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const ContactComponent: React.FC = () => {

    const schema = yup.object().shape({
        name: yup.string().min(2, "Имя должно содержать минимум 2 буквы").required("Введите имя"),
        email: yup.string().email("Введите корректный e-mail").max(30, "Максимальное количество символов: 30").required("Введите e-mail"),
        tel: yup.string().matches(/^\+?\d{1,4}[-.\s]?\d{1,20}$/, "Введите корректный телефон").required("Введите телефон"),
        message: yup.string().max(100, "Максимальное количество символов: 100"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IFormData>({
        defaultValues: {
            name: '',
            email: '',
            tel: '',
        },
        resolver: yupResolver(schema)
    });

    const [formResponseData, setformResponseData] = React.useState<string>('');
    const [onLoadingResponseData, setOnLoadingResponseData] = React.useState<boolean>(false);

    return (
        <section className="contacts">
            <div className="container">
                <ul className="contacts-info">
                    <li>
                        <h5>Телефон</h5>
                        <span>+38 (099) 90-85-617</span>
                    </li>
                    <li>
                        <h5>E-mail</h5>
                        <span>info@sitename.com</span>
                    </li>
                    <li>
                        <h5>Адрес</h5>
                        <span>г. Харьков, проспект Гагарина, 25</span>
                    </li>
                </ul>
                <form className='main' onSubmit={handleSubmit(handleSubmitForm(setOnLoadingResponseData, setformResponseData))}>
                    <h3>Напишите нам</h3>
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
                    <textarea placeholder='Комментарий' {...register('message')} />
                    <button className='action main' type="submit">{onLoadingResponseData ? <img style={{maxHeight: "20px"}} src="/images/loadingGif.gif" alt="Loading"></img>: 'Отправить'}</button>
                    <div className={`response ${formResponseData.length ? 'active': ''}`}>{formResponseData}</div>
                </form>
            </div>
            
        </section>
    );
};
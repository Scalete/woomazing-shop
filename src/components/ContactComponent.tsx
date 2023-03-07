import React from 'react';
import { IFormData } from '../redux/globalIntefaces';
import { handleChange, handleSubmit } from '../utils/contactsHandler';

export const ContactComponent: React.FC = () => {

    const [formData, setFormData] = React.useState<IFormData>({
        name: '',
        email: '',
        tel: '',
        message: ''
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
                <form onSubmit={(e) => handleSubmit(e, setOnLoadingResponseData, setformResponseData, formData)}>
                    <h3>Напишите нам</h3>
                    <input type="text" name="name" placeholder="Имя" autoComplete="off" onChange={(e) => handleChange(e, setFormData)} required />
                    <input type="email" name="email" placeholder="E-mail" autoComplete="off" onChange={(e) => handleChange(e, setFormData)}  required />
                    <input type="text" name="tel" placeholder="Телефон" autoComplete="off" onChange={(e) => handleChange(e, setFormData)} required />
                    <textarea placeholder='Сообщение' name="message" id="message" onChange={(e) => handleChange(e, setFormData)} maxLength={200}></textarea>
                    <button className='action main' type="submit">{onLoadingResponseData ? <img style={{maxHeight: "20px"}} src="/images/loadingGif.gif" alt="Loading"></img>: 'Отправить'}</button>
                    <div className={`response ${formResponseData.length ? 'active': ''}`}>{formResponseData}</div>
                </form>
            </div>
            
        </section>
    );
};
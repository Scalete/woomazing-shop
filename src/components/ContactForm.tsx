import React from 'react';
import { IDataFormProps, IFormData } from '../redux/globalIntefaces';
import { handleChange, handleSubmit } from '../utils/contactsHandler';

export const ContactForm: React.FC<IDataFormProps> = ({activeForm, setActiveForm}) => {    

    const [formData, setFormData] = React.useState<IFormData>({
        name: '',
        email: '',
        tel: '',
    });

    const [formResponseData, setformResponseData] = React.useState<string>('');
    const [onLoadingResponseData, setOnLoadingResponseData] = React.useState<boolean>(false);

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
            <form style={formResponseData? {width: '600px', maxWidth: 'initial'}: undefined} onSubmit={(e) => handleSubmit(e, setOnLoadingResponseData, setformResponseData, formData)}>
                {formResponseData ? '': <svg onClick={onClose} className='close-btn' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 14.5 14.5m0-14.5L1 15.5" stroke="#000"/></svg>}
                <h2>{formResponseData ? formResponseData: 'Заказать обратный звонок'}</h2>
                {
                    formResponseData ? <div className='action second' onClick={onClose}>Закрыть</div>: (
                        <>
                            <input type="text" name="name" placeholder="Имя" autoComplete="off" value={formData.name} onChange={(e) => handleChange(e, setFormData)} required />
                            <input type="email" name="email" placeholder="E-mail" autoComplete="off" value={formData.email} onChange={(e) => handleChange(e, setFormData)}  required />
                            <input type="text" name="tel" placeholder="Телефон" autoComplete="off" value={formData.tel} onChange={(e) => handleChange(e, setFormData)} required />
                            <button className='action main' type="submit">{onLoadingResponseData ? <img style={{maxHeight: "20px"}} src="/images/loadingGif.gif" alt="Loading"></img>: 'Заказать звонок'}</button>
                        </>
                    )
                }
            </form>
        </div>
    );
};
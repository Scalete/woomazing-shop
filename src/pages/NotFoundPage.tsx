import { Link } from 'react-router-dom';
import { HelmetComponent } from '../components/HelmetComponent';

function NotFoundPage() {
    return (
        <div className='not-found-page'>
            <HelmetComponent title='404' description='Такой страницы не существует'/>
            <h1>Страница не найдена</h1>
            <p>Извините, запрашиваемая страница не существует.</p>
            <Link className='action second' to={`${process.env.REACT_APP_HOME_URL}`}>Вернуться на главную</Link>
        </div>
    );
}

export default NotFoundPage;
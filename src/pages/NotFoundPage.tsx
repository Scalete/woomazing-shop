import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='not-found-page'>
      <h1>Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link className='action second' to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;
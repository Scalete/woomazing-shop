import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';

export const Header: React.FC = () => {

    const [scrollY, setScrollY] = React.useState<number>(0);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        });
    }, [scrollY]);

    return (
        <header className={`header ${scrollY > 50?'active': ''}`}>
            <div className="container">
                <Logo/>
                <Menu/>
                <div className="header-actions">
                    <div className="header-contacts">
                        <a href='tel:+380999051727' className="phone-icon">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_31357_426)" fill="#6E9C9F"><path d="M2.252 4.816a3.856 3.856 0 0 0 0 5.448l.798-.798a2.727 2.727 0 0 1 0-3.852 2.727 2.727 0 0 1 3.852 0l.798-.798a3.856 3.856 0 0 0-5.448 0Z"/><path d="M3.841 6.391a1.623 1.623 0 0 0 0 2.293l.798-.797a.49.49 0 0 1 0-.698.49.49 0 0 1 .698 0l.797-.798a1.623 1.623 0 0 0-2.293 0ZM13.748 4.435l-1.893-1.887-3.932 3.926 1.525 1.574c-.256.453-.81 1.322-1.755 2.267a10.919 10.919 0 0 1-2.277 1.764l-1.543-1.523-3.87 3.847 1.882 1.895c.72.72 1.815.907 2.725.465 1.39-.675 3.485-1.92 5.584-4.019 2.1-2.098 3.344-4.195 4.018-5.584.16-.329.238-.682.238-1.033 0-.62-.242-1.232-.702-1.692Zm-.55 2.232c-.637 1.311-1.814 3.292-3.801 5.28-1.988 1.988-3.969 3.164-5.28 3.8a1.255 1.255 0 0 1-1.433-.245l-1.087-1.094 2.278-2.264L5.19 13.44l.352-.156c.057-.026 1.417-.641 2.95-2.173 1.532-1.533 2.135-2.881 2.16-2.938l.152-.347-1.297-1.34 2.349-2.345 1.095 1.091c.38.38.479.957.247 1.434Z"/></g><defs><clipPath id="clip0_31357_426"><path fill="#fff" d="M0 0h17v17H0z"/></clipPath></defs></svg>
                        </a>
                        <a className='hover-underline-animation' href="tel:+380999051727">+38 (099) 905-17-27</a>
                    </div>
                    <a href="#" className="header-basket">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.845 8.224a.533.533 0 0 0-.444-.148h-6.367V5.263a5.034 5.034 0 1 0-10.068 0v2.813H.599c-.178 0-.355 0-.444.148a.504.504 0 0 0-.148.445l2.22 12.141a3.613 3.613 0 0 0 3.495 2.961h12.556a3.642 3.642 0 0 0 3.494-2.99l2.221-12.112a.503.503 0 0 0-.148-.445ZM8.15 5.263a3.85 3.85 0 0 1 7.7 0v2.813h-7.7V5.263Zm12.438 15.37a2.37 2.37 0 0 1-2.31 1.954H5.722a2.37 2.37 0 0 1-2.31-1.955L1.31 9.261h21.38l-2.102 11.371Z" fill="#000"/><path d="M16.442 15.035a.592.592 0 0 0 .592-.592v-1.777a.592.592 0 1 0-1.184 0v1.777c0 .327.265.592.592.592ZM7.558 15.035a.592.592 0 0 0 .592-.592v-1.777a.592.592 0 1 0-1.184 0v1.777c0 .327.265.592.592.592Z" fill="#000"/></svg>
                        <span>3</span>
                    </a>
                </div>
            </div>
        </header>
    );
};
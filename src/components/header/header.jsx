import { Link } from 'react-router-dom';
import {
    Nav,
    NavItems
} from './header-styled';
import './header.css';

function Header() {
    return (
        <header>
            <h1 style={{ textAlign: 'center', fontWeight: '900' }}>Kinopoisk React App</h1>
            <Nav>
                <NavItems>
                    <li>
                        <Link to="/">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to="/premieres">
                            Кинопремьеры
                        </Link>
                    </li>
                    <li>
                        <Link to="/top-films">
                            Лучшие фильмы
                        </Link>
                    </li>
                </NavItems>
            </Nav>

        </header>
    );
}

export default Header;

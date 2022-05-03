import { Nav, NavItems, NavLinkItem } from './header-styled';

function Header() {
    return (
        <header>
            <Nav>
                <NavItems>
                    <li>
                        <NavLinkItem href="/">Главная</NavLinkItem>
                    </li>
                    <li>
                        <NavLinkItem href="/">Кинопремьеры</NavLinkItem>
                    </li>
                    <li>
                        <NavLinkItem href="/">Лучшие фильмы</NavLinkItem>
                    </li>
                </NavItems>
            </Nav>

        </header>
    );
}

export default Header;

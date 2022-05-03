import { Routes, Route } from 'react-router-dom';
import Header from '../header/header';
import FilmPage from '../../pages/film-page/film-page';
import Main from '../../pages/main/main';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Main />} />
                <Route path='film/:id' element={<FilmPage />} />
            </Routes>
        </>
    );

}

export default App;

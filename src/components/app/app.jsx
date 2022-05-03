import { Routes, Route } from 'react-router-dom';
import Header from '../header/header';
import FilmPage from '../../pages/film-page/film-page';
import Main from '../../pages/main/main';
import MoviePremieres from '../../pages/movie-premieres/movie-premieres';
import TopFilms from '../../pages/top-films/top-films';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Main />} />
                <Route path='film/:id' element={<FilmPage />} />
                <Route path='premieres' element={<MoviePremieres />} />
                <Route path='top-films' element={<TopFilms />} />
            </Routes>
        </>
    );

}

export default App;

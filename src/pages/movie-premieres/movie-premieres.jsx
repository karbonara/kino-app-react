import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FilmItem,
    FilmsWrapper,
    FilmImg,
    Title
} from '../../components/film-items/film-items-styled';

function MoviePremieres() {
    const [dataFilm, setDataFilm] = useState([]);

    const API_KEY = '9f0dbb07-0a38-44df-ad56-488fa085c240';
    const API_URL_PREMIERS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=JULY`;

    useEffect(() => {
        axios.get(API_URL_PREMIERS, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(({ data }) => setDataFilm(data.items))
    }, [API_URL_PREMIERS])

    return (
        <>
            <FilmsWrapper>
                {dataFilm.map((item) => (
                    <FilmItem>
                        <Link style={{ textDecoration: 'none' }} to={`/film/${item.filmId}`}>
                            <FilmImg src={item.posterUrl} alt={item.nameRu}></FilmImg>
                            <Title>{item.nameRu}</Title>
                        </Link>
                    </FilmItem>
                ))}
            </FilmsWrapper>

        </>
    );
}

export default MoviePremieres;

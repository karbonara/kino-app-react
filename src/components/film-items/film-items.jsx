import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    Title,
    FilmsWrapper,
    FilmImg,
    FilmItem,
    FilmButton
} from './film-items-styled';
import FilmRating from '../film-rating/film-rating';
import { Link } from 'react-router-dom';

function FilmItems() {
    const [dataFilm, setDataFilm] = useState([]);
    const [page, setPage] = useState(1);

    const API_KEY = '9f0dbb07-0a38-44df-ad56-488fa085c240';
    const API_URL_POPULAR = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`;

    useEffect(() => {
        axios.get(API_URL_POPULAR, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(({ data }) => setDataFilm(data.films))
    }, [API_URL_POPULAR])

    const handleNext = () => {
        setPage((x) => x + 1)
    }

    return (
        <>
            <FilmsWrapper>
                {dataFilm.map((item) => (
                    <FilmItem key={item.filmId}>
                        <Link style={{ textDecoration: 'none' }} to={`/film/${item.filmId}`}>
                            <FilmImg src={item.posterUrl} alt={item.nameRu}></FilmImg>
                            <Title>{item.nameRu}</Title>
                            <FilmRating rating={item.rating} />
                        </Link>
                    </FilmItem>
                ))}
            </FilmsWrapper>
            <FilmButton onClick={handleNext}>
                Next
            </FilmButton>
        </>
    );
}

export default FilmItems;

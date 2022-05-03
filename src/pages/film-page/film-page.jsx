import axios from 'axios';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmWrapper, FilmWrapperImg, FilmInfo, FilmTitle, FilmTitleOriginal, RatingMpaa, FilmInfoText, FilmInfoTextIntro, FilmImages } from './film-page-styled';

function FilmPage() {
    const { id } = useParams();
    const [film, setFilm] = useState([]);
    const [images, setBox] = useState([]);
    const API_KEY = '9f0dbb07-0a38-44df-ad56-488fa085c240';
    const API_FILM = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`;
    const API_FILM_IMAGES = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images`;


    useEffect(() => {
        axios.get(API_FILM, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(({ data }) => setFilm(data))
            .catch((error) => {
                console.log(error`error`)
            })
    }, [])

    useEffect(() => {
        axios.get(API_FILM_IMAGES, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(({ data }) => setBox(data.items))
    }, [])

    return (
        <>
            <FilmWrapper>
                <img src={film.posterUrlPreview} alt={film.nameRu} />
                <FilmInfo>
                    <FilmTitle>{film.nameRu}</FilmTitle>
                    <FilmTitleOriginal>{film.nameOriginal}</FilmTitleOriginal>
                    <FilmInfoText>
                        <FilmInfoTextIntro>Год производства</FilmInfoTextIntro> {film.year}
                    </FilmInfoText>
                    <FilmInfoText>
                        <FilmInfoTextIntro>Время</FilmInfoTextIntro> {film.filmLength} мин
                    </FilmInfoText>
                    <FilmInfoText>
                        <FilmInfoTextIntro>Слоган</FilmInfoTextIntro> {film.slogan}
                    </FilmInfoText>
                    <FilmInfoText>
                        <FilmInfoTextIntro>Рейтинг MPAA</FilmInfoTextIntro> <RatingMpaa> {film.ratingMpaa}</RatingMpaa>
                    </FilmInfoText>
                    <p>{film.description}</p>
                </FilmInfo>
            </FilmWrapper>
            <FilmWrapperImg>
                {
                    images.map((imgs) => (
                        <img
                            key={imgs.imageUrl}
                            style={{ width: '45%', margin: '18px 0' }}
                            src={imgs.imageUrl}
                            alt={imgs}
                        />
                    ))
                }
            </FilmWrapperImg>

        </>
    );
}

export default FilmPage;
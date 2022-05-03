import { Rating } from './film-rating-styled';

function FilmRating({ rating }) {
    return (
        <Rating>
            {rating}
        </Rating>
    );
}

export default FilmRating;

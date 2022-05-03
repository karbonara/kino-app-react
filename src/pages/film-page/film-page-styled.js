import styled from 'styled-components';

export const FilmWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 48px 0;
    display: flex;
    justify-content: space-between;
`;
export const FilmWrapperImg = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 48px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const FilmInfo = styled.div`
    padding: 0 52px;
`;
export const FilmTitle = styled.h1`
    margin: 0;
    font-size: 46px;
    font-weight: 700;
`;
export const FilmTitleOriginal = styled.h2`
    margin: 2px 0px 26px 0;
    font-size: 21px;
    font-weight: 300;
`;
export const FilmInfoText = styled.div`
    display: flex;
    align-items: center;
    margin: 18px 0;
`;
export const FilmInfoTextIntro = styled.div`
    width: 195px;
`;
export const FilmImages = styled.img`
    width: 45%;
    margin: 18px 0;
`;
export const RatingMpaa = styled.div`
    border: 1px solid rgb(176 176 176 / 90%);
    padding: 3px 4px;
    font-size: 13px;
    font-weight: 600;
    line-height: 13px;
    border-radius: 4px;
    width: 30px;
    padding: 6px;
    text-transform: uppercase;
    color: #fff;
`;
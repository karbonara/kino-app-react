import styled from 'styled-components';

export const Title = styled.div`
    font-size: 16px;
    margin: 6px 0;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
`;
export const FilmsWrapper = styled.div`
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;
export const FilmImg = styled.img`
    width: 230px;
    height: 340px;
    border-radius: 0.4rem;
`;
export const FilmItem = styled.div`
    width: 220px;
    margin: 14px 38px;
    position: relative;
    transition: 0.2s;
    &:hover {
        transform: scale(1.03);
    }
`;
export const FilmButton = styled.button`
    padding: 6px 14px;
    display: block;
    box-sizing: border-box;
    border: none;
    background: #f60;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border-radius: 0.4rem;
    margin: 36px auto;
    cursor: pointer;
    &:hover {
        background: #df5c05;
    }
`;
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
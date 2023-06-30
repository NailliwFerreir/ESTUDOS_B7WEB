import style from 'styled-components';

export const Container = style.div`
    width:100%;
    margin: auto;
    max-width:750px;
    display: flex;
    justify-content: center;
    padding: 50px 0;
    @media (max-width: 760px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const Info = style.div`
    display: flex;
    flex-direction: column;
    width: auto;
    @media (max-width: 760px) {
        align-items: center;
        margin-bottom: 30px;
    }
`;

export const LogoLink = style.a``;

export const InfoArea = style.div``;

export const GridArea = style.div`
    flex:1;
    display: flex;
`;

export const Grid = style.div`
    width: 450px;
    display: grid;    
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;
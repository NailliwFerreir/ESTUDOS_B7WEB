import styles from 'styled-components';

export const Button = styles.div`
    cursor:pointer;
    height:50px;
    width:150px;
    border-radius:15px;
    background-color: #1B98E0;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight:bold;
    transition: all ease .4s;
    &:hover{
        opacity:.9;
        font-size:17px;
    }
`;
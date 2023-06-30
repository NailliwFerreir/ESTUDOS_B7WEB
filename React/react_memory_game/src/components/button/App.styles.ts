import styles from "styled-components";

export const Container = styles.div`
    cursor: pointer;
    height: 50px;
    width:auto;
    min-width: 200px;
    border-radius: 15px;
    background-color: #1B98E0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ease .4s;
    &:hover{
        opacity: .9;
        font-size: 16.5px;
        box-shadow: 0 0 10px 2px #ddd;
    }
`;

export const IconArea = styles.div`
    height: inherit;
    margin-right: 5px;
    border-right: 2px dashed #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const Icon = styles.img`
    width: 15px;
    height: 15px;
`;
export const Label = styles.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-weight:bold;
    padding: 0 20px;
`;

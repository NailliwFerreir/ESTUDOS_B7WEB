import styled from 'styled-components';

type ContainerProps = {
    showBackground: boolean;
}
export const Container = styled.div<ContainerProps>`   
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.showBackground? '#1550FF' : '#E2E3E3'};
    border-radius: 10px;
    cursor: pointer;
`;
export const Icon = styled.img`
    width: 50px;
`;
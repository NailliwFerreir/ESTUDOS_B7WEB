import * as C from './App.styles';

type Props = {
        label:string;
        value:string;
    }
const InfoItem = ({label,value}:Props) =>{
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}

export default InfoItem;
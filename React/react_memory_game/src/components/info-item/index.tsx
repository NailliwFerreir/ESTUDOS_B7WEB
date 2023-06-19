import * as C from './App.styles';
type Props = {
        label_top:string;
        label_bottom:string;
    }
const InfoItem = ({label_top,label_bottom}:Props) =>{
    return (
        <>
        <C.InfoTop>{label_top}</C.InfoTop>
        <C.InfoBottom>{label_bottom}</C.InfoBottom>
        </>
    );
}

export default InfoItem;
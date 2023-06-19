import * as C from './App.styles'
type Props = {
    label : string;
}
const Button = ({label}:Props) =>{
    return <C.Button>{label}</C.Button>
}
export default Button;
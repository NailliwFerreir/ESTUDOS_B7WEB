import * as C from './App.styles'
import Button from './components/button';
import InfoItem from './components/info-item';
import LogoImage from './assets/devmemory_logo.png'
const App = () => {
   return (
      <C.Container>
         <C.Info>
            <C.LogoLink href=''>
               <img src={LogoImage} alt="Logo" width={200} />
            </C.LogoLink>
            <C.InfoArea>
               <InfoItem label_top='Jogadas' label_bottom='0'></InfoItem>
               <InfoItem label_top='Tempo' label_bottom='00:00'></InfoItem>
            </C.InfoArea>
            <Button label='Reiniciar'></Button>
         </C.Info>
         <C.GridArea>...</C.GridArea>
      </C.Container>
   );  
}

export default App;
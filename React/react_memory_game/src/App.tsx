import * as C from "./App.styles";
import { Button } from "./components/button";
import InfoItem from "./components/info-item";
import LogoImage from "./assets/devmemory_logo.png";
import RestartIcon from "./svgs/restart.svg";
import { useEffect, useState } from "react";
import { GridItemType } from "./types/GridItemType";
import { items } from "./data/items";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeLapsed, setTimeLapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  useEffect(() => resetAndCreateGrid(), []);

  const resetAndCreateGrid = () => {
    // step 1: reset
    setTimeLapsed(0);
    setMoveCount(0);
    setShowCount(0);
    // step 2: create grid items
    let tempGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++)
      tempGrid.push({
        item: null,
        show: false,
        permanentShow: false,
      });

    //step 2.2 insert grid values
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < items.length; j++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item != null) {f
          pos = Math.floor(Math.random() * items.length * 2);
        }
        tempGrid[pos].item = j;
      }
    }
    // step 2.3 setstate
    setGridItems(tempGrid);
    // step 3: start the game
    setPlaying(true);
  };

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={LogoImage} alt="Logo" width={200} />
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>
        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClick={resetAndCreateGrid}
        />
      </C.Info>
      <C.GridArea>
        <C.Grid />
      </C.GridArea>
    </C.Container>
  );
};

export default App;

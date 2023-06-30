import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7svg from '../../svgs/b7.svg';
import { items } from '../../data/items';

export type Props = {
    item: GridItemType;
    onClick: ()=>void;
}

export const GridItem = ({item, onClick}: Props) => {
    return (
        <C.Container 
        showBackground={false}
        onClick={onClick}>
            {!item.permanentShow && !item.show &&
                <C.Icon src={b7svg}/>
            }
            {(item.permanentShow || item.show) && item.item != null &&
                <C.Icon src={items[item.item].icon}/>
            }
        </C.Container >
    );
}
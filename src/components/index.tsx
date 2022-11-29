import { item } from '../types/itens';

type propriedades = {
    item: item;
}

export const ItemLista = ({item}:propriedades) => {
    return(
        <div id = "nomeitem">
            <label >{item.id} - {item.name}</label>
        </div>
    );
}
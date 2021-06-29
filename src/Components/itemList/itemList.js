import { Item } from '../item/item'

export const ItemList =({items})=>{
    return(
        <>
            {items.map(item => <Item item={item}/>)} 
        </>
    )
}
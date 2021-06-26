import { ItemList } from '../itemList/itemList'
import {useState, useEffect} from "react"

export const ItemListContainer = ({greeting}) => {
    const [catalogo, setCatalogo] = useState([])
    const producto = [{
        id: '1',
        title: 'Laptop',
        pictureUrl: "https://www.clickyarregla.com/wp/wp-content/uploads/2016/03/laptop-png-6759.png",
        description: 'Dispositivo de última generación',
        price: '$25.000,00'
    },
    {
        id: '2',
        title: 'Tablet',
        pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/MANEJANDO_LA_NUEVA_TABLET.png",
        description: 'Tablet para toda la familia',
        price: '$13.500,00'
    },
    {
        id: '3',
        title: 'Celular',
        pictureUrl: "https://www.seekpng.com/png/small/226-2265084_mockup-celular-png-celular-png.png",
        description: 'Smartphone de última generación',
        price: '$15.000,00'
    }]
    useEffect(()=>{
        const nuevaPromesa = new Promise((result, reject)=>{
            setTimeout(()=>{
                result(producto)
            },2000)
        })
    
        nuevaPromesa.then((result)=>{
            setCatalogo(result)
        })
    },[])
    return(
        <ItemList items={catalogo}/>
    )
}
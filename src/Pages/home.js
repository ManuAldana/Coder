import './home.css'
import { NavBar } from '../Components/navBar/navBar'
import { ItemListContainer } from '../Components/itemListContainer/itemListContainer'
import { ItemCount } from '../Components/itemCount/itemCount'

export const Home = () => {
    return (
        <div>
            <NavBar />
            <ItemCount stock="5" inicial="1" />
            <ItemListContainer greeting="Listener" />
        </div>
    )
}
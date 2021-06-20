import './home.css'
import { NavBar } from '../Components/navBar/navBar'
import { ItemListContainer } from '../Components/itemListContainer/itemListContainer'

export const Home = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Hola" />
        </div>
    )
}

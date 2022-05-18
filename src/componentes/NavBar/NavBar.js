import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <h1>Del Valle</h1>
            <CardWidget />
            <div>
                <button>Macbook</button>
                <button>Iphone</button>
                <button>Accesorios</button>
            </div>
        </nav>
    )
}

export default NavBar
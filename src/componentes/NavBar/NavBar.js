import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div>
                <CardWidget className="card" />
            </div>
            <div>
                <h1 className="nav-titulo">Del Valle</h1>
                <div className="nav-botones">
                    <button className="nav-boton1">Macbook</button>
                    <button className="nav-boton2">Iphone</button>
                    <button className="nav-boton3">Accesorios</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
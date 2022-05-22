import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div>
                <CardWidget className="card" />
            </div>
            <div>
                <h1 className="nav-titulo">Nunca es suficiente</h1>
                <div className="nav-botones">
                    <button className="nav-boton1">Cervezas</button>
                    <button className="nav-boton2">Aperitivos</button>
                    <button className="nav-boton3">Snaks</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
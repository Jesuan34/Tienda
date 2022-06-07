import { Link } from 'react-router-dom';
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div>
                <CardWidget className="card" />
            </div>
            <div>
                <Link to='/'>
                    <h1 className="nav-titulo">Nunca es suficiente</h1>
                </Link>
                <div className="nav-botones">
                    {/*<button className="nav-boton1">Cervezas</button>
                    <button className="nav-boton2">Aperitivos</button>
                    <button className="nav-boton3">Snaks</button>*/}
                    <Link to='/categoria/cervezas'>Cervezas</Link>
                    <Link to='/categoria/aperitivos'>Aperitivos</Link>
                    <Link to='/categoria/snacks'>Snaks</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
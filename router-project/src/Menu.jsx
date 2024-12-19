import { Link } from "react-router";

export function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <Link to="/characters"> Personajes </Link>
            <br></br>
            <Link to="/locations"> Sitios </Link>
        </div>
    )
}

export default Menu;
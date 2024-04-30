import { Link } from "react-router-dom";

const Navbar  = () => {
    return (
        <nav>
            <h1>Skriv din Task här!</h1>
            <div className="NavLinks">
                <Link to="/"> Startsida</Link>
                <Link to="/Todo">Todo</Link>
                <Link to="/Info">Information</Link>
            </div>
        </nav>
    );
};
export default Navbar;

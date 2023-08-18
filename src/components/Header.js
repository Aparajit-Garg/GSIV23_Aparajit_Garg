import './../styles/Header.css'
import { Search } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
    const params = useParams()
    console.log(params)
    return (
        <header className="header">
            <span className="search_input">
                <Search />
                <input type="text" placeholder="Search" />
            </span>
            <span className="home_icon">
                <Link to="/"> <Home /> </Link>
            </span>
            
        </header>
    );
}

export default Header;
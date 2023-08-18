import classes from './../styles/Header.module.css'
import { Search } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
    const params = useParams()
    console.log(params)
    console.log(params.id)
    
    return (
        <header className={classes.header}>
            {
                params.id !== undefined ? 
                <h2> Movie Details </h2>
                :
                <span className={classes.search_input}>
                    <Search />
                    <input type="text" placeholder="Search" />
                </span>
            }
            <span className={classes.home_icon}>
                <Link to="/"> <Home /> </Link>
            </span>
            
        </header>
    );
}

export default Header;
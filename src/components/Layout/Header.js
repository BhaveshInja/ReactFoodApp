import react from "react";
import HeaderCartButton from "./HeaderCartButton"
import mealsimage from '../../assests/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1>ReactFood</h1>
            <HeaderCartButton onCartshow={props.onCartshow}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage} alt="Image of food!" /> 
        </div>
    </>
}

export default Header;
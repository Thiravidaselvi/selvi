import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

import foodHeader from '../../assets/food-header.jpg';

function Header(props) {

    return (
        <Fragment>
            <header className= {classes.header}>
                <h1><em><strong>Zomato</strong></em></h1>
                <HeaderCartButton onClick ={props.onShowCart}/>
            </header>
            <div className= { classes['main-image'] }>
                <img src= {foodHeader} alt='Main food header' ></img>
            </div>
        </Fragment>
    )
}

export default Header;

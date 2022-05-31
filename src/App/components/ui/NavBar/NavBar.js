import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'

const initialState= {};

const NavBar = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        console.log("NavBar monté");
    },[])
    return (
        <div className={style.NavBar} data-testid="NavBar">NavBar</div>
    )
}

NavBar.propTypes = {

}

export default NavBar
import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import style from './Header.module.css'

const initialState= {};

const Header = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        console.log("Header monté");
    },[])
    return (
        <div className={style.Header} data-testid="Header">Header</div>
    )
}

Header.propTypes = {

}

export default Header
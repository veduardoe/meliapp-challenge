import React, { useState } from 'react';
import './../../scss/Main.scss';
import './../../scss/Header.scss';
import logo from './../../assets/images/logomeli.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory} from 'react-router-dom';

const Header = (props) => {

    const history = useHistory();
    const [searchValue, setData] = useState('');

    const handleChange = (event) => {
        setData(event.target.value);
    }

    const search = () => {
        if(searchValue){
            history.push(`/items?search=${searchValue}`);
        }
    }

    const pressEnterAction = (e) => {
        if(e.keyCode === 13){
            search();
        }
    }

    const goHome = () => {
        history.push(`/`);
    }

    return (
        <div className='header'>
            <div className='container'>
                <div className="searchBar">
                    <img src={logo} className='logo' alt="logo" onClick={() => {goHome()}}/>
                    <input type='text' placeholder='Buscar productos, marcas y más...' onChange={handleChange} onKeyUp={pressEnterAction} />
                    <button className="searchBtn" onClick={search}>
                         <FontAwesomeIcon icon={faSearch}  />
                    </button>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    )

}

export default Header;
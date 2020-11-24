import {useState} from 'react';

// Styles & animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo192.png';
import {fadeIn} from '../animations';

// Redux & routes
import {fetchSearch} from '../actions/gameAction';
import {useDispatch} from 'react-redux';

// Images
import searchIcon from '../img/search-duotone.svg';


const Nav = () => {
    // Search functionality
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };
    // Clear searched
    const clearSearched = () => {
        dispatch({type: 'CLEAR_SEARCHED'})
    };

    return(
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <StyledLogo onClick={clearSearched}>
                <img src={logo} alt="logo"/>
                <h1>MultiGamer</h1>
            </StyledLogo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type='submit'>search</button>
            </form>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
    margin: 0rem 5rem;
    padding: 3rem 5rem;
    text-align: center;
    color: white;
    background: #272727;
    border-radius: 0 0 1rem 1rem;
    .search{ 
        display: flex;
        justify-content: center;
    }
    input {
        margin: 0;
        padding: 0.5rem;
        width: 50%;
        font-size: 1.5rem;
        line-height: 2rem;
        border: none;
        border-radius: 1rem 0 0 1rem;
        &:focus{
        box-shadow: 0px 0px 5px 1px rgba(232, 82, 82, 1);
        }
    }
    button {
        text-indent: -99999px;
        margin: 0;
        padding: 0.5rem;
        height: 3rem;
        width: 4rem;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0 1rem 1rem 0;
        background: #e85252 center center no-repeat;
        background-size: 2rem;
        background-image: url(${searchIcon});
    }
    @media (max-width: 1300px){
        margin: 0;
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        input {
            width: 60%;
            margin-top: 0;
            font-size: 1.25rem;
        }
        button {
            border-width: 1px 1px 1px 0;
            border-color: #d86464;
            border-style: solid;
            padding: 0.5rem 1rem;
            font-size: 1.25rem;
        }
    }
    @media (max-width: 600px){
        flex-direction: column;
        input {
            width: 100%;
            font-size: 1rem;
        }
        button {
            padding: 0.5rem 0.5rem;
            font-size: 1rem;
        }
    }
`;
const StyledLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        margin: 0rem 0.5rem;
        opacity: 0.9;
    }
    @media (max-width: 1300px){
        padding: 0rem;
    }
    @media (max-width: 600px){
        margin-bottom: 1rem;
        align-self: flex-start;
        h1{
            font-size: 1rem;
        }
    }
`;

export default Nav;
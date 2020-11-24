import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../img/logo192.png';

const Footer = () => {
    return(
        <StyledFooter>
            <StyledLogoMain>
                <img src={logo} alt="logo"/>
                <h1>MultiGamer</h1>
            </StyledLogoMain>
            <StyledCopyright>
                <p>© 2020 Marc Garside - Web Dev</p>
            </StyledCopyright>
        </StyledFooter>
    )
}

const StyledFooter = styled(motion.footer)`
    display: flex;
    justify-content: space-between;
    margin: 0 5rem;
    margin: 0rem 5rem;
    padding: 2rem 5rem;
    color: white;
    background: #272727;
    border-radius: 1rem 1rem 0 0;
    @media (max-width: 1300px){
        margin: 0;
        padding: 1rem 1rem;
    }
    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`;
const StyledLogoMain = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    img {
        height: 2rem;
        margin: 0rem 0.5rem;
        opacity: 0.9;
    }
    h1{
        font-size: 1rem;
    }
    @media (max-width: 600px){
        margin-bottom: 0.5rem;
    }
`;
const StyledCopyright = styled(motion.div)`
    p {
        font-size: 1rem;
    }
`;
export default Footer;
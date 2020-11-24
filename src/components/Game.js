import {Link} from 'react-router-dom';
import {smallImage} from '../util';

// Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {popIn} from '../animations';

// redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';

const Game = ({name, released,image,id}) => {
    // Conver path id
    const stringPathId = id.toString();
    // load detail handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    }

    return(
        <StyledGame variants={popIn} initial='hidden' animate='show' layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name}/>
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    background: #e85252;
    color: white;
    h3 {
        padding: 0.5rem 0.5rem;
    }
    p {
        padding: 0.5rem 0.5rem;
        color: #dfdfdf;
    }
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    @media (max-width: 1300px){
        height: 40vh;
        img {
            height: 100%;
            object-position: center top;
        }
    }
`;

export default Game;
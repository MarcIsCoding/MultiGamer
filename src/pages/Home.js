import {useEffect} from 'react';
import GameDetail from '../components/GameDetail';
import {useLocation} from 'react-router-dom';

// redux
import {useDispatch,useSelector} from 'react-redux';
import {loadGames} from '../actions/gameAction';

// Styling and animations
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {fadeIn} from '../animations';

// Components
import Game from '../components/Game';


const Home = () => {
    // Get Location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    
    // Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    },[dispatch])
    
    // Get Data Back
    const {popular,upcoming,newGames,searched} = useSelector((state) => state.games);

    return(
        <StyledGameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId}/>}
                </AnimatePresence>
                {searched.length ? (
                    <div className='searched'>
                        <h2>Results</h2>
                        <StyledGames>
                            {searched.map(game => (
                                <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                            ))}
                        </StyledGames>
                    </div>
                ) : ''}
                <h2>Upcoming Games</h2>
                <StyledGames>
                    {upcoming.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                    ))}
                </StyledGames>
                <h2>Popular Games</h2>
                <StyledGames>
                    {popular.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                    ))}
                </StyledGames>
                <h2>New Games</h2>
                <StyledGames>
                    {newGames.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                    ))}
                </StyledGames>
            </AnimateSharedLayout>
        </StyledGameList>
    )
};

const StyledGameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
    @media (max-width: 1300px){
        padding: 0rem 1rem;
        h2 {
            padding: 2rem 0rem;
        }
    }
`;
const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    margin-bottom: 3rem;
    @media (max-width: 1300px){
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 3rem;
        grid-row-gap: 5rem;
    }
`;

export default Home;
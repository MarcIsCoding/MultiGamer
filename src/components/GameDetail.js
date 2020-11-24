import React from 'react';
import {useHistory} from 'react-router-dom';
import {smallImage} from '../util';

// Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {shadowFade} from '../animations';

// redux
import {useSelector} from 'react-redux';

// Images
import playstation from '../img/playstation.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import close from '../img/times-solid.svg';

// Stars
import starEmpty from '../img/star-regular.svg';
import starFull from '../img/star-solid.svg';

const GameDetail = ({pathId}) => {
    const history = useHistory();

    // Exit detail handler
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }

    // Get platform images
    const getPlatform = (platform) => {
        switch(platform){
            case 'PlayStation 4':
                return playstation;
            case 'iOS':
                return apple;
            case 'Nintendo Switch':
                return nintendo;
            case 'PC':
                return steam;
            case 'Xbox One':
                return xbox;
            default:
                return gamepad;
        }
    }
    
    // Get stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars.push(<img alt='star' key={i} src={starFull}></img>)
            }else{
                stars.push(<img alt='star' key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

    // Get video
    const videoClip = () => {
        const clip = [];
        const clips = game.clip;
        if(!clips){
            return null;
        }else{
            clip.push(<video src={game.clip.clip} key={game.clip.video} width='100%' controls="controls"/>)
        }
        return clip;
    }

    // data
    const { screen, game, isLoading } = useSelector((state) => state.detail);
    return(
        <>
        {!isLoading && (
            <StyledCardShadow variants={shadowFade} initial='hidden' animate='show' className='shadow' onClick={exitDetailHandler}>
                <StyledDetail layoutId={pathId}>
                    <StyledStats>
                        <StyledExit>
                            <img className='shadow' src={close} alt="close"/>
                        </StyledExit>
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating: {game.rating}</p>
                            {getStars()}
                        </div>
                        <StyledInfo>
                            <h3>Platforms</h3>
                            <StyledPlatforms>
                                {game.platforms.map((data) => (
                                    <img key={data.platform.id} alt={data.platform.name} src={getPlatform(data.platform.name)}></img>
                                ))}
                            </StyledPlatforms>
                        </StyledInfo>
                    </StyledStats>
                    <StyledMedia>
                        <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.name}/>
                    </StyledMedia>
                    <StyledDescription>
                        <p>{game.description_raw}</p>
                    </StyledDescription>
                    <StyledVideo>
                        {videoClip()}
                    </StyledVideo>
                    <div className="gallery">
                        {screen.results.map((screen) => (
                            <img src={smallImage(screen.image, 1280)} key={screen.id} alt={game.name}/>
                        ))}
                    </div>
                </StyledDetail>
            </StyledCardShadow>
        )}
        </>
    )
};

const StyledCardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #e85252;
    }
    &::-webkit-scrollbar-track {
            background: #272727;
    }
`;
const StyledDetail = styled(motion.div)`
    width: 80%;
    margin-top: 2rem;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: #272727;
    box-shadow: 0px 0px 30px 1px rgba(232, 82, 82, 0.7);
    position: absolute;
    left: 10%;
    color: #dfdfdf;
    z-index: 10;
    img {
        width: 100%;
    }
    @media (max-width: 1300px){
        width: 100%;
        margin-top: 0;
        border-radius: 0rem;
        padding: 2rem 1rem;
        left: 0;
    }
`;
const StyledStats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    img {
        height: 2rem;
        width: 2rem;
        display: inline;
    }
    @media (max-width: 1300px){
        align-items: baseline;
        justify-content: space-between;
        img {
            height: 1.5rem;
            width: 1.5rem;
        }
    }
`;
const StyledInfo = styled(motion.div)`
    text-align: center;
    @media (max-width: 1300px){
        width: 50%;
        display: flex;
        overflow: hidden;
        justify-content: center;
        flex-wrap: wrap;
    }
`;
const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
    @media (max-width: 1300px){
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        img {
            margin-left: 0;
            margin: 0.5rem 1rem;
        }
    }
`;
const StyledMedia = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
        object-position: center top;
    }
`;
const StyledDescription = styled(motion.div)`
    margin: 5rem 0rem;
    @media (max-width: 1300px){
        margin: 2rem 0;
    }
    @media (max-width: 900px){
        p {
            text-align: justify;
        }
    }
`;
const StyledExit = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    img{
        cursor: pointer;
    }
`;
const StyledVideo = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
    video {
        border-radius: 1rem;
    }
`;

export default GameDetail;
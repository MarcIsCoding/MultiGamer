// Base URL

const base_url = 'https://api.rawg.io/api/';

// Setting up the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month <10){
        return `0${month}`;
    }else{
        return month;
    }
};
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day <10){
        return `0${day}`;
    }else{
        return day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

// Compile full date
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;

// Upcoming Games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;

// New Games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

// Game screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;

// Searched game
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&ordering=-rating&page_size=12`;

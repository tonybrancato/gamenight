// import moment from 'moment';

const initialState = {
  data: [
    {
      name: "Splendor",
      type: "Board Game",
      players: "2 - 4",
      rating: "3",
      games: [
        {date: '03/28/2018', win: 1, players: ['Mom', 'Kayla', 'Anthony']},
        {date: '04/28/2018', win: 1, players: ['Mom', 'Kayla', 'Anthony']},
        {date: '04/20/2018', win: 0, players: ['Mom', 'Kayla', 'Anthony']},
        {date: '04/04/2018', win: 1, players: ['Mom', 'Kayla', 'Anthony']},
        {date: '04/15/2018', win: 1, players: ['Mom', 'Kayla', 'Anthony']},
      ]
    },
    {
      name: "Star Wars Rebellion",
      type: "Board Game",
      players: "2 - 4",
      rating: "5",
    }
  ],
};

export default function gamesReducer(state = initialState, action) {
  
  return state;

}

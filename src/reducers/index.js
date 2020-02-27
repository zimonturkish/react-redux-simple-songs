import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Life on Mars", duration: "4:10" },
    { title: "Message in a bottle", duration: "4:51" },
    { title: "Kids", duration: "5:02" },
    { title: "Sgt. Pepper's Lonely Hearts Club Band", duration: "2:02" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

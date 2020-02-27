//Action creator
export const selectSong = song => {
  // return an action
  return {
    type: "SONG_SELECTED", // type always required
    payload: song // we want to specify which song we are trying to select
  };
};

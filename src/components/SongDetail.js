import React from "react";
import { connect } from "react-redux";

const SongDetail = () => {
  console.log(props);
  return <div> SongDetail</div>;
};

const mapStateToProps = state => {
  return { song: state.selecteSong };
};

export default connect(mapStateToProps)(SongDetail);

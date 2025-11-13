import React, { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import { useParams } from "react-router-dom";
import MoviesCards from "./MoviesCards";
import EpisodesContainer from "./EpisodesContainer";
function Player() {
  let { id } = useParams();

  const video = useContext(DataContext);

  const singleVideo = video.videos.filter((items) => items._id === id);

  return (
    <>
      <MoviesCards video={singleVideo} play={true} />
      <EpisodesContainer episode={singleVideo} play={true} />
    </>
  );
}

export default Player;

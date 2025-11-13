import React from "react";
import Carousel from "./carousel";
import { DataContext } from "../hooks/DataContext";
import { useContext } from "react";
import MoviesCards from "./MoviesCards";
import UploadEpisode from "./UploadEpisode";
import UploadSeries from "./UploadSeries";
import SeriesContainer from "./SeriesContainer";

function Home() {
  let data = useContext(DataContext);


  
  if (!data.videos || data.videos.length === 0) {
    return (
      <div className="loading-container text-center py-5  text-light ">
        <div className="spinner-border text-danger" role="status"></div>

        <p className="mt-3">loading .... please wait</p>
      </div>
    );
  }

  return (
    <div>
      <Carousel imgData={data} />
      <MoviesCards video={data.videos} />
      <SeriesContainer />
    </div>
  );
}

export default Home;

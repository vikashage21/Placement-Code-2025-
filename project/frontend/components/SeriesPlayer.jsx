import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesCards from "./MoviesCards";
import EpisodesContainer from "./EpisodesContainer";

function SeriesPlayer() {
  // useParam can not be use twice
  let { id , epId } = useParams();
 
  console.log(epId);
  const [seriesData, setData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);

  // Fetch series data
  async function getData() {
    try {
      const res = await fetch("http://localhost:5000/api/series");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  }

  // fetching episode data

  async function getEpisodeData() {
    try {
      const res =await fetch("http://localhost:5000/api/episodes");
      const data = await res.json();
      setEpisodeData(data);
    } catch (error) {
      console.log("Error fetching episodes: ", error);
    }
  }

  useEffect(() => {
    getData();
    getEpisodeData();
  }, []);

  console.log(episodeData)

  const singleVideo = seriesData.filter((e) => e._id === id);
  const singleEp = episodeData.find((e)=>e._id === epId)

  console.log(singleVideo);
  console.log(singleEp)

  return (
    <>
      <MoviesCards video={singleVideo} ep={singleEp || {}} play={true} />
      <EpisodesContainer episode={singleVideo} play={true} />
    </>
  );
}

export default SeriesPlayer;

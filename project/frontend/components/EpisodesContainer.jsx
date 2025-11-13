import React from "react";
import EpisodeCards from "./EpisodeCards";
import { useState } from "react";
import { useEffect } from "react";

function EpisodesContainer({ episode }) {
  let [singleEp, setSingleEp] = useState(null);

  useEffect(() => {
    if (episode && episode.length > 0 && episode[0].episodes) {
      setSingleEp(episode[0].episodes);
    }
  }, [episode]);

  return <>{<EpisodeCards data={singleEp} />}</>;
}

export default EpisodesContainer;

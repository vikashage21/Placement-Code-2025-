import React, { useEffect, useState } from "react";
import Axios from "axios";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users"

  const handelData = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };
  useEffect(() => {
    handelData();
  }, []);

  return <div>
    {
        data.map((e)=> <p>{e.name}</p>)
    }
  </div>;
};

export default FetchingData;

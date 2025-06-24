import React, { useEffect, useState } from 'react';

function App() {
  const Api = "https://pokeapi.co/api/v2/pokemon/ditto";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const fetchData = () => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => {

        setData(data);
        setLoading(false)

      })
      .catch((err) => {
        console.error("Error fetching data:", err)
        setLoading(false)
        setError(err)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

 

 return (
  <div className="min-h-screen bg-gradient-to-r from-purple-200 to-blue-200 flex items-center justify-center">
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-[350px] text-center">
      <h1 className="text-2xl font-bold mb-6 text-purple-700">Pokémon Info</h1>

      {!loading ? (
        <div>
          <img
            src={data.sprites.front_default}
            alt={data.name}
            className="w-28 h-28 mx-auto image-pixelated mb-4"
          />
          <p className="font-semibold">
            Name: <span className="text-gray-700">{data.name}</span>
          </p>
          <p className="font-semibold">
            Base Experience: <span className="text-gray-700">{data.base_experience}</span>
          </p>
          <p className="font-semibold">
            Height: <span className="text-gray-700">{data.height}</span>
          </p>
          <p className="font-semibold">
            Weight: <span className="text-gray-700">{data.weight}</span>
          </p>

          <h3 className="text-lg font-bold mt-4 text-purple-600">Abilities</h3>
          <ul className="list-disc list-inside text-left mt-2">
            {data.abilities.map((abilityObj, index) => (
              <li key={index} className="capitalize text-gray-600">
                {abilityObj.ability.name}
              </li>
            ))}
          </ul>
        </div>
      ) : !error ? (
        <div className="flex flex-col items-center">
          <p className="text-gray-600 mb-4">Loading Pokémon...</p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Loading"
            className="w-20 h-20 animate-bounce image-pixelated"
          />
        </div>
      ) : (
        <div className="text-red-500">
          <p>Error fetching data: {error.message}</p>
        </div>
      )}
    </div>
  </div>
);

}

export default App;

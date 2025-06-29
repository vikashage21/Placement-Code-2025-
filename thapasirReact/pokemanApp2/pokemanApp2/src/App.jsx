import React, { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon';
import './App.css';
function App() {

  const Api = "https://pokeapi.co/api/v2/pokemon?limit=124";
  const [data, setData] = useState([])

  const [loading, setLoading] = useState("")
  const [error, setError] = useState(null)

  const [search , setSearch]= useState("")


  const fecthPokemonData = async () => {
    try {

      const resp = await fetch(Api)
      const data = await resp.json()


      const pokemanDetailData = data.results.map(async (currData) => {
        const detailData = await fetch(currData.url);
        const data = await detailData.json();
        setLoading(true)
        return data;





      })



      const pokemonData = await Promise.all(pokemanDetailData);
      setData(pokemonData)
      setLoading(false);


    } catch (error) {

      setError(error.message);;
      setLoading(false);

    }

  }

  useEffect(() => {

    // fecthing the pokemon data from the api 

    fecthPokemonData()






  }, [])

  // search functionality

  const searchdata = data.filter((pokemon)=> pokemon.name.toLowerCase().includes(search.toLowerCase()))

  if (loading) {
    return (
      <h1 className='text-2xl flex justify-center items-center mt-20 text-black font-bold'>loading...</h1>

    )


  }

  if (error) {
    return (
      <h1 className='text-2xl flex justify-center items-center mt-20 text-black font-bold'>Error: {error}</h1>
    )
  }

  return (



    <>



      <Pokemon data={searchdata} searchingData={setSearch}  />


    </>

  )
}

export default App

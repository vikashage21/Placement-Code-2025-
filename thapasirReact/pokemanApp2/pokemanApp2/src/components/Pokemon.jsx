import React from 'react';

function Pokemon({ data, searchingData }) {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100'>
            <h1 className='text-2xl font-bold text-center p-2'>let's catch pokemon</h1>

            <input className='w-[50%] p-2' type="text" placeholder='Enter pokemon name' value={searchingData((pre) => pre)} onChange={(e) => searchingData(e.target.value)} />
            <div className="container flex flex-wrap justify-center items-center gap-6 p-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen">


                {
                    data.map((pokemon) => {
                        return (
                            <div
                                key={pokemon.id}
                                className="shiny-card relative w-64 h-[400px] rounded-2xl overflow-hidden shadow-2xl border-[3px] border-indigo-200 bg-white backdrop-blur-md transition-transform hover:scale-105 duration-300"
                            >
                                {/* Holographic background layer */}
                                <div className="holo-bg absolute inset-0 pointer-events-none z-0"></div>

                                {/* Pokémon Image */}
                                <div className="flex items-center justify-center bg-white pt-4 relative z-10">
                                    <div className="bg-gradient-to-tr from-blue-300 via-purple-200 to-pink-300 p-2 rounded-full shadow-inner">
                                        <img
                                            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                                            alt={pokemon.name}
                                            className="w-32 h-32 object-contain rounded-full bg-white p-2"
                                        />
                                    </div>
                                </div>

                                {/* Info section */}
                                <div className="info p-4 text-center z-10 relative">
                                    <h2 className="text-xl font-bold capitalize text-gray-800">
                                        {pokemon.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">Base XP: {pokemon.base_experience}</p>

                                    <div className="mt-2">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                                            {pokemon.types[0]?.type.name}
                                        </span>
                                    </div>

                                    <div className="mt-4 text-sm text-gray-600">
                                        <p>Height: {pokemon.height}</p>
                                        <p>Weight: {pokemon.weight}</p>
                                    </div>

                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>

    );
}

export default Pokemon;

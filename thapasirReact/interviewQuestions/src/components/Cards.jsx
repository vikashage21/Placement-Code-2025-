import React from 'react';

function Cards({ items }) {
  return (
    <div className="bg-white rounded-2xl p-4 w-full max-w-4xl mx-auto shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">

      {/* Image Section */}
      <div className="w-full md:w-2/3 h-64 md:h-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
          alt={items.name}
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{items.name}</h2>

          {items.tagline && (
            <p className="text-sm text-gray-500 italic">"{items.tagline}"</p>
          )}

          <p className="mt-2 text-gray-600 text-sm">
            <strong>Created By:</strong> {items.created_by || "N/A"}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Genres:</strong> {items.genres || "N/A"}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Language:</strong> {items.spoken_languages || "N/A"}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Network:</strong> {items.networks || "N/A"}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Air Dates:</strong> {items.first_air_date} → {items.last_air_date}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Seasons:</strong> {items.number_of_seasons} | <strong>Episodes:</strong> {items.number_of_episodes}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Production:</strong> {items.production_companies || "N/A"}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Status:</strong> {items.status}
          </p>

          <p className="mt-1 text-gray-600 text-sm">
            <strong>Vote Average:</strong>{" "}
            <span className={`${items.vote_average >= 7 ? "bg-green-400" : "bg-yellow-400"} rounded-sm p-1`}>
              ⭐ {Number(items.vote_average).toFixed(1)}
            </span>{" "}
            ({Number(items.vote_count).toLocaleString()} votes)
          </p>

          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            {items.overview?.length > 200
              ? `${items.overview.substring(0, 200)}...`
              : items.overview}
          </p>
        </div>

        {items.homepage && (
          <div className="mt-6">
            <a
              href={items.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={`${items.vote_average >= 7 ? "bg-green-400" : "bg-amber-400"} rounded-sm p-1 inline-block text-white px-4 py-2 hover:bg-blue-700 transition`}
            >
              WATCH NOW
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;

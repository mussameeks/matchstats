import React, { useEffect, useState } from "react";
import { getCountriesWithLeagues } from "../api/sportsmonks";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountriesWithLeagues();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🌍 Countries & Their Leagues</h2>
      <ul className="space-y-4">
        {countries.map((country) => (
          <li key={country.id} className="bg-white shadow p-4 rounded-md">
            <h3 className="text-lg font-semibold text-blue-600">{country.name}</h3>
            {country.leagues?.data?.length > 0 ? (
              <ul className="ml-4 list-disc text-sm text-gray-600 mt-2">
                {country.leagues.data.map((league) => (
                  <li key={league.id}>{league.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No leagues available.</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

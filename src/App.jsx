import axios from "axios";
import { useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  const loadCountries = async () => {

    const { data } = await axios.get(
      "https://countriesnow.space/api/v0.1/countries"
    );
    setCountries(data.data);
  };

  return (
    <div className="p-6">
      <button
        onClick={loadCountries}
        
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
       print
      </button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">#</th>
            <th className="border p-2 text-left">Country</th>
            <th className="border p-2 text-left">Number of cities</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item, index) => (
            <tr key={item.country}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.country}</td>
              <td className="border p-2">{item.cities.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
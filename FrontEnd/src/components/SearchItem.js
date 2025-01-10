import React, { useState } from "react";
import ApiService from "../services/ApiService";

const SearchItem = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        ApiService.searchItems(searchTerm).then((response) => {
            setResults(response.data);
        });
    };

    return (
        <div className="bg-gray-100 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Search Item</h2>
            <input
                className="border p-2 w-full mb-4"
                type="text"
                placeholder="Search by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="bg-green-500 text-white py-2 px-4 rounded mb-4"
                onClick={handleSearch}
            >
                Search
            </button>
            <ul>
                {results.map((item) => (
                    <li
                        key={item.id}
                        className="p-2 border-b flex justify-between items-center"
                    >
                        <span>{item.name}</span>
                        <span>{item.quantity} units</span>
                        <span>${item.price.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchItem;


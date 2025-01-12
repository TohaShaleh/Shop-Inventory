import React, { useState } from "react";

function SearchItems({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="my-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Search Items</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search items by name..."
                className="border border-gray-300 rounded-lg p-4 w-full text-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
    );
}

export default SearchItems;

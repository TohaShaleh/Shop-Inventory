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
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search items by name..."
                className="border border-gray-300 rounded-lg p-4 w-full text-lg shadow focus:outline-none focus:ring focus:ring-purple-300"
            />
        </div>
    );
}

export default SearchItems;

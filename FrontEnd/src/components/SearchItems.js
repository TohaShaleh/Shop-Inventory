import React, { useState } from "react";

const SearchItems = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); // Trigger search as user types
    };

    return (
        <div className="my-4">
            <input
                type="text"
                placeholder="Search items by name..."
                value={searchTerm}
                onChange={handleChange}
                className="border border-gray-300 px-4 py-2 w-full rounded-md"
            />
        </div>
    );
};

export default SearchItems;

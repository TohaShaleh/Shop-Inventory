import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddItem from "./components/AddItem";
import SearchItems from "./components/SearchItems";
import ItemListPage from "./pages/ItemListPage";
import ApiService from "./services/ApiService";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchItems = async (query) => {
        try {
            const response = await ApiService.searchItems(query);
            setSearchResults(response.data);
            setIsSearching(query.trim() !== "");
        } catch (error) {
            console.error("Error searching items:", error);
            alert("Failed to search items. Please try again.");
        }
    };

    return (
        <Router>
            <div className="container mx-auto p-6">
                <nav className="mb-6 bg-blue-500 text-white p-4 rounded shadow-md">
                    <ul className="flex space-x-4 justify-center">
                        <li>
                            <Link
                                to="/"
                                className="text-lg font-medium hover:bg-blue-600 px-4 py-2 rounded transition"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/items"
                                className="text-lg font-medium hover:bg-blue-600 px-4 py-2 rounded transition"
                            >
                                Item List
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1 className="text-3xl font-bold text-center my-8 text-blue-600">
                                    Shop Inventory Home
                                </h1>
                                <AddItem
                                    onAdd={async (item) => {
                                        try {
                                            await ApiService.addItem(item);
                                            alert("Item added successfully!");
                                        } catch (error) {
                                            console.error("Error adding item:", error);
                                            alert("Failed to add item. Please try again.");
                                        }
                                    }}
                                />
                                <SearchItems onSearch={handleSearchItems} />
                                {isSearching && <ItemListPage items={searchResults} />}
                            </div>
                        }
                    />
                    <Route path="/items" element={<ItemListPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

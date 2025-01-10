import React, { useState } from "react";
import ApiService from "../services/ApiService";

function SearchAndUpdateItem({ onItemUpdated }) {
    const [searchName, setSearchName] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [updatedItem, setUpdatedItem] = useState({
        quantity: "",
        price: "",
        description: "",
    });

    const handleSearch = async () => {
        try {
            const response = await ApiService.searchItems(searchName);
            if (response.data.length > 0) {
                setSearchResult(response.data[0]);
                setUpdatedItem({
                    quantity: response.data[0].quantity,
                    price: response.data[0].price,
                    description: response.data[0].description,
                });
            } else {
                alert("No item found with the given name.");
                setSearchResult(null);
            }
        } catch (error) {
            console.error("Error searching item:", error);
            alert("An error occurred while searching for the item.");
        }
    };

    const handleUpdate = async () => {
        try {
            const updated = {
                ...searchResult,
                quantity: updatedItem.quantity,
                price: updatedItem.price,
                description: updatedItem.description,
            };

            const response = await ApiService.updateItem(searchResult.id, updated);
            alert("Item updated successfully!");
            onItemUpdated(response.data); // Notify the parent component
            setSearchResult(null);
            setUpdatedItem({
                quantity: "",
                price: "",
                description: "",
            });
        } catch (error) {
            console.error("Error updating item:", error);
            alert("An error occurred while updating the item.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedItem((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="p-4 border rounded shadow my-4">
            <h2 className="text-lg font-bold mb-4">Search and Update Item</h2>
            <div className="mb-4">
                <label className="block font-medium">Search by Item Name:</label>
                <input
                    type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="border p-2 rounded w-full"
                    placeholder="Enter item name"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Search
                </button>
            </div>

            {searchResult && (
                <div className="mt-4 p-4 border rounded">
                    <h3 className="text-md font-bold">Update Item</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label>Item Name:</label>
                            <input
                                type="text"
                                value={searchResult.name}
                                disabled
                                className="border p-2 rounded w-full"
                            />
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <input
                                type="number"
                                name="quantity"
                                value={updatedItem.quantity}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={updatedItem.price}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            />
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={updatedItem.description}
                                onChange={handleChange}
                                className="border p-2 rounded w-full"
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            onClick={handleUpdate}
                            className="bg-green-500 text-white p-2 rounded mt-2"
                        >
                            Update Item
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default SearchAndUpdateItem;

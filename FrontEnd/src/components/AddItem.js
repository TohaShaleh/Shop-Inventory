import React, { useState } from "react";

function AddItem({ onAdd }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name, quantity: parseInt(quantity), price: parseFloat(price), description };

        try {
            await onAdd(newItem);
            alert("Item added successfully!");
            setName("");
            setQuantity("");
            setPrice("");
            setDescription("");
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    return (
        <div className="p-6 border rounded-lg shadow-md bg-gradient-to-r from-blue-50 to-blue-100 my-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Add Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-700 font-semibold">Item Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700 font-semibold">Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700 font-semibold">Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700 font-semibold">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
}

export default AddItem;

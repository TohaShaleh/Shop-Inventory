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
            await onAdd(newItem); // Call the onAdd function passed from the parent
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
        <div className="p-4 border rounded shadow my-4">
            <h2 className="text-lg font-bold">Add Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Item Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Item
                </button>
            </form>
        </div>
    );
}

export default AddItem;

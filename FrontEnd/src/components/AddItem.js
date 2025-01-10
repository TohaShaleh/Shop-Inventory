import React, { useState } from "react";
import ApiService from "../services/ApiService";

const AddItem = () => {
    const [item, setItem] = useState({ name: "", quantity: 0, price: 0, description: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        ApiService.addItem(item).then(() => {
            alert("Item added successfully!");
            setItem({ name: "", quantity: 0, price: 0, description: "" });
        });
    };

    return (
        <div className="bg-gray-100 p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="border p-2 w-full mb-4"
                    type="text"
                    placeholder="Name"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })}
                />
                <input
                    className="border p-2 w-full mb-4"
                    type="number"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(e) => setItem({ ...item, quantity: e.target.value })}
                />
                <input
                    className="border p-2 w-full mb-4"
                    type="number"
                    placeholder="Price"
                    value={item.price}
                    onChange={(e) => setItem({ ...item, price: e.target.value })}
                />
                <textarea
                    className="border p-2 w-full mb-4"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => setItem({ ...item, description: e.target.value })}
                ></textarea>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;

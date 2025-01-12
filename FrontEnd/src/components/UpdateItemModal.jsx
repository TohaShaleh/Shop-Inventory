import React, { useState } from "react";

const UpdateItemModal = ({ item, onUpdate, onCancel }) => {
    const [updatedItem, setUpdatedItem] = useState({ ...item });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedItem);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Update Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedItem.name}
                            onChange={handleChange}
                            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            disabled // Disabling name field for consistency
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={updatedItem.quantity}
                            onChange={handleChange}
                            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={updatedItem.price}
                            onChange={handleChange}
                            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Description</label>
                        <textarea
                            name="description"
                            value={updatedItem.description}
                            onChange={handleChange}
                            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItemModal;

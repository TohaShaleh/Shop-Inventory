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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-bold mb-4">Update Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedItem.name}
                            onChange={handleChange}
                            className="border border-gray-300 px-4 py-2 w-full rounded-md"
                            disabled
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={updatedItem.quantity}
                            onChange={handleChange}
                            className="border border-gray-300 px-4 py-2 w-full rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={updatedItem.price}
                            onChange={handleChange}
                            className="border border-gray-300 px-4 py-2 w-full rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Description</label>
                        <textarea
                            name="description"
                            value={updatedItem.description}
                            onChange={handleChange}
                            className="border border-gray-300 px-4 py-2 w-full rounded-md"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-gray-300 px-4 py-2 rounded-md mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
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

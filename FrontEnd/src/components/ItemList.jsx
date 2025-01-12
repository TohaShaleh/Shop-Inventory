import React from "react";

function ItemList({ items, onEdit, onDelete }) {
    return (
        <div className="my-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Item List</h2>
            <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-md bg-white">
                <thead className="bg-blue-100 text-blue-700">
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Price</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="hover:bg-blue-50 transition">
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.quantity}</td>
                            <td className="border px-4 py-2 text-green-600">${item.price}</td>
                            <td className="border px-4 py-2">{item.description}</td>
                            <td className="border px-4 py-2 flex space-x-2 justify-center">
                                <button
                                    onClick={() => onEdit(item)}
                                    className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(item.id)}
                                    className="px-3 py-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ItemList;

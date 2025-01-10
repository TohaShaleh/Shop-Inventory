import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

function ItemList() {
    const [items, setItems] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingItem, setEditingItem] = useState({ id: '', name: '', price: '', quantity: '' });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        ApiService.getAllItems()
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    };

    const handleDelete = (id) => {
        ApiService.deleteItem(id)
            .then(() => fetchItems())
            .catch(error => console.error(error));
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setIsEditMode(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingItem({ ...editingItem, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        ApiService.updateItem(editingItem.id, editingItem)
            .then(() => {
                setIsEditMode(false);
                fetchItems();
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Item List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        <th className="border border-gray-300 px-4 py-2">Quantity</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={() => handleEdit(item)}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isEditMode && (
                <div className="mt-4 p-4 border border-gray-300 rounded">
                    <h2 className="text-xl font-bold mb-4">Edit Item</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={editingItem.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={editingItem.price}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Quantity:</label>
                            <input
                                type="number"
                                name="quantity"
                                value={editingItem.quantity}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded"
                            />
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={() => setIsEditMode(false)}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ItemList;

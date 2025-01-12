import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import ItemList from "../components/ItemList";
import UpdateItemModal from "../components/UpdateItemModal";

const ItemListPage = ({ items: searchResults = null }) => {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchResults) {
            fetchItems();
        } else {
            setItems(searchResults);
            setLoading(false);
        }
    }, [searchResults]);

    const fetchItems = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await ApiService.getAllItems();
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
            setError("Failed to fetch items. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (updatedItem) => {
        try {
            await ApiService.updateItem(updatedItem.id, updatedItem);
            setItems((prevItems) =>
                prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
            );
            setEditingItem(null);
        } catch (error) {
            console.error("Error updating item:", error);
            alert("Failed to update item. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiService.deleteItem(id);
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete item. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center my-8 text-blue-600">Item List Page</h1>
            {error && <p className="text-center text-red-500">{error}</p>}
            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <ItemList
                    items={items}
                    onEdit={(item) => setEditingItem(item)}
                    onDelete={handleDelete}
                />
            )}
            {editingItem && (
                <UpdateItemModal
                    item={editingItem}
                    onUpdate={handleUpdate}
                    onCancel={() => setEditingItem(null)}
                />
            )}
        </div>
    );
};

export default ItemListPage;

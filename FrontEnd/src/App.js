import React, { useState, useEffect } from "react";
import ApiService from "./services/ApiService";
import ItemList from "./components/ItemList";
import SearchItems from "./components/SearchItems";
import AddItem from "./components/AddItem";
import UpdateItemModal from "./components/UpdateItemModal";

function App() {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showItemList, setShowItemList] = useState(true);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await ApiService.getAllItems();
            setItems(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const handleSearch = async (name) => {
        if (name.trim() === "") {
            setIsSearching(false);
            return;
        }
        try {
            const response = await ApiService.searchItems(name);
            setSearchResults(response.data);
            setIsSearching(true);
            setShowItemList(true);
        } catch (error) {
            console.error("Error searching items:", error);
        }
    };

    const handleAddItem = async (newItem) => {
        try {
            const response = await ApiService.addItem(newItem);
            const newItems = isSearching
                ? [...searchResults, response.data]
                : [...items, response.data];
            setItems(newItems);
            setSearchResults(newItems);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiService.deleteItem(id);
            const updatedItems = isSearching
                ? searchResults.filter((item) => item.id !== id)
                : items.filter((item) => item.id !== id);
            setItems(updatedItems);
            setSearchResults(updatedItems);
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const handleUpdate = async (updatedItem) => {
        try {
            await ApiService.updateItem(updatedItem.id, updatedItem);
            const updatedItems = isSearching
                ? searchResults.map((item) =>
                      item.id === updatedItem.id ? updatedItem : item
                  )
                : items.map((item) =>
                      item.id === updatedItem.id ? updatedItem : item
                  );
            setItems(updatedItems);
            setSearchResults(updatedItems);
            setEditingItem(null);
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center my-8">Shop Inventory</h1>
            <AddItem onAdd={handleAddItem} />
            <SearchItems onSearch={handleSearch} />
            <button
                onClick={() => setShowItemList((prev) => !prev)}
                className="bg-purple-500 text-white px-4 py-2 rounded shadow my-4 hover:bg-purple-600"
            >
                {showItemList ? "Hide Item List" : "Show Item List"}
            </button>
            {showItemList && (
                <ItemList
                    items={isSearching ? searchResults : items}
                    onEdit={handleEdit}
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
}

export default App;

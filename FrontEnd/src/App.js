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

    // Fetch all items on component mount
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
        } catch (error) {
            console.error("Error searching items:", error);
        }
    };

    const handleAddItem = async (newItem) => {
        try {
            const response = await ApiService.addItem(newItem);
            setItems((prevItems) => [...prevItems, response.data]);

            if (isSearching) {
                setSearchResults((prevResults) => [...prevResults, response.data]);
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiService.deleteItem(id);

            // Remove item from the full list
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));

            if (isSearching) {
                setSearchResults((prevResults) =>
                    prevResults.filter((item) => item.id !== id)
                );
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const handleUpdate = async (updatedItem) => {
        try {
            const response = await ApiService.updateItem(updatedItem.id, updatedItem);
            const updatedData = response.data;

            // Update full list
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === updatedData.id ? updatedData : item
                )
            );

            if (isSearching) {
                // Update search results
                setSearchResults((prevResults) =>
                    prevResults.map((item) =>
                        item.id === updatedData.id ? updatedData : item
                    )
                );
            }

            setEditingItem(null); // Close the modal
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <div className="App container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Shop Inventory</h1>
            <AddItem onAdd={handleAddItem} />
            <SearchItems onSearch={handleSearch} />
            <ItemList
                items={isSearching ? searchResults : items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
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

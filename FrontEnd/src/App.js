import React from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import SearchItem from "./components/SearchItem";

const App = () => {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl font-bold mb-5 text-center">Shop Management</h1>
            <AddItem />
            <SearchItem />
            <ItemList />
        </div>
    );
};

export default App;

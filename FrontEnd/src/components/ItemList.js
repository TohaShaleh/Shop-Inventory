import React from "react";

const ItemList = ({ items, onEdit, onDelete }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold my-4">Item List</h2>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center border-b pb-2"
                    >
                        <div>
                            <strong>{item.name}</strong> - Quantity: {item.quantity} - Price: ${item.price} - {item.description}
                        </div>
                        <div>
                            <button
                                className="text-blue-500 hover:underline mx-2"
                                onClick={() => onEdit(item)}
                            >
                                Edit
                            </button>
                            <button
                                className="text-red-500 hover:underline"
                                onClick={() => onDelete(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

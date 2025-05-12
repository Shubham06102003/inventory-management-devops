'use client'
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!name) return;

    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity, 10),
    };

    setItems([...items, newItem]);
    setName("");
    setQuantity(1);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1>DevOps</h1>
      <h1 className="text-2xl font-bold mb-4">📦 Inventory Management</h1>

      {/* Form to Add Item */}
      <form onSubmit={handleAddItem} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 w-full"
          required
        />
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
          className="border px-3 py-2 w-24"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Add
        </button>
      </form>

      {/* Inventory List */}
      <ul className="space-y-2">
        {items.length === 0 && <li className="text-gray-500">No items yet.</li>}
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center border p-2">
            <div>
              <strong>{item.name}</strong> — Quantity: {item.quantity}
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

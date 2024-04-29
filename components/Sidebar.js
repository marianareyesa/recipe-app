// Create or move this file to `components/Sidebar.js`
import React from 'react';

export default function Sidebar({ onCuisineChange }) {
  const cuisines = ['Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese']; // Example cuisines

  return (
    <div className="sidebar">
      <h2>Cuisines</h2>
      <ul>
        {cuisines.map((cuisine) => (
          <li key={cuisine} onClick={() => onCuisineChange(cuisine)}>
            {cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}

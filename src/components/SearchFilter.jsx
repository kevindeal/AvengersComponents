// Requirements
// Props for the Component:

// items: An array of strings representing the list to search through.
// placeholder: A string for the input placeholder text (e.g., "Search items...").
// Functionalities:

// Display an input field for the search term.
// Show a list of items filtered based on the input.
// If no matches are found, display a message like “No results found.”
// The search should be case-insensitive.
// Accessibility:

// Ensure the component is keyboard accessible (e.g., users can navigate the list with arrow keys).
import { useState } from 'react'

export const SearchFilter = ({ items, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm)
  }
  

  return (
    <div>
      <input 
      type="text"
      placeholder={placeholder}
      value={searchQuery}
      onChange={handleInputChange}
      />
      <ul role="list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} role="item" value={item}>{item}</li>
          ))
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  )
}
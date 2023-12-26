import React, { useState } from 'react';

const AutoWordSuggestions = () => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    // Implement  logic to generate word suggestions based on the input text
    const newSuggestions = generateSuggestions(text);
    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    setSuggestions([]);
  };

  const generateSuggestions = (text) => {
    // Implement  logic  (e.g., from a list or API)
    // For simplicity, using a static list 
    const staticSuggestions = ['Mern', 'Twitter', 'React', 'Project', 'Hello'];

    // Filter suggestions based on input text
    const filteredSuggestions = staticSuggestions.filter((word) =>
      word.toLowerCase().includes(text.toLowerCase())
    );

    return filteredSuggestions.slice(0, 5); // Limit suggestions to a certain number
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoWordSuggestions;

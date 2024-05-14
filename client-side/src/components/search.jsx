import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearch(value);
    };
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search tasks..."
                className="search-input"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Search;

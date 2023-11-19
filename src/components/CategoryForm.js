    import React, { useState } from 'react';

    const CategoryForm = ({ onAdd }) => {
    const [category, setCategory] = useState('');

    const handleAdd = () => {
        if (category) {
        onAdd(category);
        setCategory('');
        }
    };

    return (
        <div className="mb-3">
        <h3>Add Category</h3>
        <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">
            Category Name
            </label>
            <input
            type="text"
            className="form-control"
            id="categoryName"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
            Add Category
        </button>
        </div>
    );
    };

    export default CategoryForm;
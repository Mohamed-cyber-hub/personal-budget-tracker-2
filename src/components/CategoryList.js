    import React from 'react';

    const CategoryList = ({
    categories,
    onDelete,
    }) => {
    return (
        <div>
        <h3>Categories</h3>
        <ul className="list-group">
            {categories.map(
            (
                category,
                index
            ) => (
                <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center">
                {category}
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                    onDelete(
                        index
                    )
                    }>
                    Delete
                </button>
                </li>
            )
            )}
        </ul>
        </div>
    );
    };

    export default CategoryList;

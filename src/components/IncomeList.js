    import React from 'react';

    const IncomeList = ({ items, onDelete }) => {
    return (
        <div>
        <h3>Income</h3>
        <ul className="list-group">
            {items.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                Income: ${item.amount}
                <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(index)}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default IncomeList;
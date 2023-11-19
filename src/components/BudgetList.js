import React from 'react';

const BudgetList = ({ items, onDelete }) => {
  return (
    <div>
      <h3>Budget Items</h3>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.description} - ${item.amount} ({item.category})
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

export default BudgetList;
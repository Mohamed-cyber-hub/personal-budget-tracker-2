import React, { useState } from 'react';

    const IncomeForm = ({ onAdd }) => {
    const [amount, setAmount] = useState('');

    const handleAdd = () => {
        if (amount) {
        onAdd({ amount });
        setAmount('');
        }
    };

    return (
        <div className="mb-3">
        <h3>Add Income</h3>
        <div className="mb-3">
            <label htmlFor="incomeAmount" className="form-label">
            Amount
            </label>
            <input
            type="number"
            className="form-control"
            id="incomeAmount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
            Add Income
        </button>
        </div>
    );
    };

export default IncomeForm;
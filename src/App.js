import React, {useState,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

function App() {
  const [
    budgetItems,
    setBudgetItems,
  ] = useState([]);
  const [
    incomeItems,
    setIncomeItems,
  ] = useState([]);
  const [
    categories,
    setCategories,
  ] = useState([]);

  return (
    <div className="container mt-5">
      <h1>
        Personal Budget
        Tracker
      </h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <BudgetForm
            categories={
              categories
            }
            onAdd={(item) =>
              setBudgetItems([
                ...budgetItems,
                item,
              ])
            }
          />
          <BudgetList
            items={
              budgetItems
            }
            onDelete={(
              index
            ) => {
              const newItems =
                [
                  ...budgetItems,
                ];
              newItems.splice(
                index,
                1
              );
              setBudgetItems(
                newItems
              );
            }}
          />
        </div>
        <div className="col-md-6">
          <IncomeForm
            onAdd={(item) =>
              setIncomeItems([
                ...incomeItems,
                item,
              ])
            }
          />
          <IncomeList
            items={
              incomeItems
            }
            onDelete={(
              index
            ) => {
              const newItems =
                [
                  ...incomeItems,
                ];
              newItems.splice(
                index,
                1
              );
              setIncomeItems(
                newItems
              );
            }}
          />
          <CategoryForm
            onAdd={(
              category
            ) =>
              setCategories([
                ...categories,
                category,
              ])
            }
          />
          <CategoryList
            categories={
              categories
            }
            onDelete={(
              index
            ) => {
              const newCategories =
                [
                  ...categories,
                ];
              newCategories.splice(
                index,
                1
              );
              setCategories(
                newCategories
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

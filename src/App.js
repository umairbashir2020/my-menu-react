import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories.js'
import Menu from './components/Menu'
import items from './components/Data'


function App() {
  
  // to check all categories
  const allCategories = ['all', ... new Set(items.map((item) => item.category))];

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // flter items by category
  const filterItem = (category) => {
    if (category == 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category
      === category);
    setMenuItems(newItems)

  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} categories={categories}/>
        <Menu items={menuItems} />
      </section>


    </main>
  );
}

export default App;

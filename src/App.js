import React from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import BurgerBulder from "./Containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBulder/>
      </Layout>
    </div>
  );
}

export default App;

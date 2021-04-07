import React, { useEffect, useState } from 'react';
import './App.scss';
// import { PaymentForm } from './pages/PaymentForm';
// import { getCategories, postCategory, deleteCategory } from './api/categories/endpoints'
// import { Category } from './api';
// import { NotFound } from './pages/NotFound/NotFound';
// import { Posts } from './pages/Posts/Posts'
import { WeatherPage } from './pages/Weather/Weather';

function App() {
  // const [categories, setCategories] = useState<Category[]>([]);

  // const loadCategories = async () => {
  //   const res = await getCategories();
  //   setCategories(res.data.data);
  //   console.log(res.data);
  // }

  // useEffect (() => {
  //   loadCategories();
  // }, []);

  // const sendCategory = async () => {
  //   const res = await postCategory({
  //     iconId: 2,
  //     name: 'hello',
  //     description: 'here we are'
  //   })
  //   console.log(res.data);
  // }

  // const removeCategory = async (id: number) => {
  //   await deleteCategory(id);
  //   loadCategories();
  // }

  // console.log(categories);

  return (
    <div className='App'>
      <WeatherPage />
      {/* <Posts /> */}
      {/* <NotFound /> */}
      {/* <button onClick={sendCategory}>Create new category</button>
      {categories.map(elem => (
        <div key={elem.id}>
          <div>{elem.name}</div>
          <button onClick={() => removeCategory(elem.id)}>Delete</button>
        </div>
      ))}
      <PaymentForm /> */}
    </div>
  );
}

export default App;

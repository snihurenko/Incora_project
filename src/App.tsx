import React, { useEffect } from 'react';
import './App.scss';
import { Pagination } from './components/pagination/Pagination';
import css from './components/pagination/Pagination.module.scss';
import { Timer } from './components/timer/Timer';
import timerCss from './components/timer/Timer.module.scss';
import { useProducts, Product, IFilterOptions } from './hooks/useProducts';

function App() {
  const {
    products,
    page,
    total,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  } = useProducts({ perPage: 3 });

  return (
    <div className='App'>
      {Array.from({ length: total }).map((_, index) => {
        return (
          <button key={index} onClick={() => changePage(index + 1)}>
            {index + 1}
          </button>
        );
      })}

      <div>
        <button onClick={() => addProduct({ id: 20, name: 'melon', price: 10 })}>Add product</button>
        <button onClick={() => applyFilter({ priceMore: 10 } as IFilterOptions)}>
          Filter price more than 10
        </button>
        <button onClick={() => applyFilter({ priceLess: 20 } as IFilterOptions)}>
          Filter price less than 20
        </button>
        <button onClick={() => applyFilter({ name: 'melon' } as IFilterOptions)}>Filter name melon</button>
        <button
          onClick={() => applyFilter({ name: 'candy', priceMore: 10, priceLess: 20 } as IFilterOptions)}
        >
          Filter candy
        </button>
      </div>

      <div>
        {(products as Product[]).map((item: Product, index: number) => {
          return (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>price: {item.price}</p>
              <button
                onClick={() => {
                  deleteProduct(item);
                }}
              >
                Delete product
              </button>
              <button
                onClick={() => {
                  editProduct({ id: item.id, name: 'cheese', price: 20 });
                }}
              >
                Edit product
              </button>
            </div>
          );
        })}
      </div>

      {/* <Pagination
        activePage={2}
        totalItems={10}
        perPage={1}
        withActions={true}
        classes={{ btn: css.btn, activeBtn: css.active }}
        onChangePage={newPage => {}}
      />*/}

      {/* <Timer
        time={10}
        autostart={true}
        step={1000}
        onTick={() => {
          console.log('tick');
        }}
        onTimeEnd={() => {
          console.log('time ended');
        }}
        onTimeStart={() => {
          console.log('time started');
        }}
        onTimePause={() => {
          console.log('time paused');
        }}
      /> */}

      {/* <Timer/> */}
    </div>
  );
}

export default App;

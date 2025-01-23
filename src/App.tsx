import React, { Suspense, useState } from 'react'
import { MenuItem } from './entities/entities';
import { ErrorBoundary } from './components/ErrorBoundary';

export const foodItemsContext = React.createContext<MenuItem[]>([]);

const Foods = React.lazy(() => import('./components/Foods'));

function App() {
  
  const [menuItems] = useState<MenuItem[]>([
    {
      "id": 1,
      "name": "Hamburguesa de Pollo",
      "quantity": 40,
      "desc": "Hamburguesa de pollo frito - ... y mayonesa", "price": 24,
      "image": "pollo.jpeg"
      },
      {
        "id": 2,
        "name": "Hamburguesa de vaca",
        "quantity": 20,
        "desc": "Hamburguesa de vaca - ... y ketsup", "price": 24,
        "image": "pollo.jpeg"
        },
  ]);

  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  

  return (
    <>
      <foodItemsContext.Provider value={menuItems}>
        <ErrorBoundary fallback={<div>Ha ocurrido un error</div>}>
        <div className="App">
          <button className='toggleButton' onClick={() => {
            setIsChooseFoodPage(!isChooseFoodPage);
          }}>
            {isChooseFoodPage? "Disponibilidad" : "Pedir comida"}
          </button>

        <h3 className="title">Comida Rápida Online</h3> 
          
          {!isChooseFoodPage && (
            <>
              <h4 className="subTitle">Menús</h4> 
                <ul className="ulApp">
                  {menuItems.map((item) => { return (
                  <li key={item.id} className="liApp"> 
                    <p>{item.name}</p> 
                    <p>#{item.quantity}</p>
                  </li> );
                })} 
                </ul> 

            </>
          )}
          
          {isChooseFoodPage && 
            <Suspense fallback={<div>Cargando...</div>}>
              <Foods foodItems={menuItems}></Foods>
            </Suspense>
          }
          
        </div>
        </ErrorBoundary>
      </foodItemsContext.Provider>
    </>
  )
}

export default App

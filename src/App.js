import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => setIsCartShown(true);
  
  const hideCartHandler = () => setIsCartShown(false);

  return (
    <>
      {isCartShown && <Cart onCartshow={showCartHandler} onCartHide={hideCartHandler} />}
      <Header onCartshow={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

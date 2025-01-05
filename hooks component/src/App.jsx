import ShoppingCart from "./component/ShoppingCart";
import LiveClock from "./component/LiveClock";
import NameForm from "./component/NameForm";
import ProductFilter from "./component/ProductFilter";
import TodoApp from "./component/TodoApp";
import ThemeProviderr from "./component/ThemeProvider";
import SShoppingCart from "./component/SShoppingCart";
import ProductCard2 from "./component/ProductCard";

function App() {
  return (
    <div>
      <ShoppingCart /> {/* useState Hook */}
      <br />
      <LiveClock /> {/* useEffect Hook */}
      <br />
      <NameForm /> {/* useRef Hook */}
      <br />
      <ProductFilter /> {/* useMemo Hook */}
      <br />
      <TodoApp /> {/* useCallback Hook */}
      <br />
      <ThemeProviderr /> {/* useContext Hook */}
      <br />
      <SShoppingCart /> {/* useReducer Hook */}
      <br />
      <ProductCard2 /> {/* useLayoutEffect Hook */}
    </div>
  );
}

export default App;

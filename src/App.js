import TodoList from "./components/todo";
import CoinTracker from "./components/coin-tracker";
import Movie from "./components/movie/movie";

function App() {
  return (
    <div>
      <TodoList />
      <hr />
      <CoinTracker />
      <hr />
      <Movie />
    </div>
  );
}

export default App;

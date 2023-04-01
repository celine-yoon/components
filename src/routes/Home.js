import Todo from "../components/Todo";
import CoinTracker from "../components/CoinTracker";
import Movies from "../components/movies/Movies";

function Home() {
  return (
    <div>
      <Todo />
      <hr />
      <CoinTracker />
      <hr />
      <Movies />
    </div>
  );
}

export default Home;

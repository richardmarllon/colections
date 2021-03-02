import { useEffect } from "react";
import CartHome from "../../components/CardHome/CardHome";

const Home = () => {
  let key = "listOfFav";

  useEffect(() => {
    console.log(localStorage.getItem(key));
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify([{}]));
    }
  }, []);

  return (
    <div>
      <CartHome />
    </div>
  );
};
export default Home;

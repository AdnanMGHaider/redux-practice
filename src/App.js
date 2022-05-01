import { useSelector } from "react-redux";

import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import UserProfile from "./Components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />;
    </>
  );
}

export default App;

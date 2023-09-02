import {RouterProvider} from "react-router-dom";
import router from './routers/Router';

function App() {


  return (
    <>
      {/* <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

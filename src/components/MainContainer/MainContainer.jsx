import appRouter from "../../utility/routesConfig.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MainContainer = () => {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
export default MainContainer;

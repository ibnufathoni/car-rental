import {createBrowserRouter} from "react-router-dom";
import LandingPage from "../../module/landingPage";
import CartPage from "../../module/cart";

const routerList = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "cart",
        element: <CartPage />
    }
]);

export default routerList;
import { createBrowserRouter } from "react-router-dom";
import Setting from "../pages/Setting";
import Questions from "../pages/Questions";
import ResultPage from "../pages/ResultPage";


export const router = createBrowserRouter([
    {
      path: "/setting",
      element:<Setting/>
    },
    {
      path: "result",
      element: <ResultPage/>,
    },
    {
      path: "questions",
      element: <Questions/>,
    },
  ]);
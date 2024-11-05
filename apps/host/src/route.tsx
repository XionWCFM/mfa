import { Suspense } from "@suspensive/react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { BottomNavigationLayout } from "./components/bottom-navigation-layout";
import { HomePage } from "./pages/home.page";
import InfoPage from "./pages/info-page";
import { MemoPage } from "./pages/memo.page";
import TodoDetailPage from "./pages/todo-detail.page";
import TodoRootPage from "./pages/todo-root.page";

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div>bottom navigation loading...</div>}>
        <BottomNavigationLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "todo",
        element: <TodoRootPage />,
      },
      {
        path: "memo",
        element: <MemoPage />,
      },
      {
        path: "/info",
        element: <InfoPage />,
      },
    ],
  },
  {
    children: [
      {
        path: "todo/:id",
        element: <TodoDetailPage />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);

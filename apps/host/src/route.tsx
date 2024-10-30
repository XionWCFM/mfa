import TodoDetailPage from "@mf-xion-todo/todo-detail-page";
import TodoRootPage from "@mf-xion-todo/todo-root-page";
import TodoWritePage from "@mf-xion-todo/todo-write-page";
import { Suspense } from "@suspensive/react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { BottomNavigationLayout } from "./components/bottom-navigation-layout";
import { HomePage } from "./pages/home.page";
import { MemoPage } from "./pages/memo.page";

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
    ],
  },
  {
    children: [
      {
        path: "todo/write",
        element: (
          <Suspense fallback={<div>todo loading...</div>}>
            <TodoWritePage />
          </Suspense>
        ),
      },
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

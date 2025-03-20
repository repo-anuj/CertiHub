import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LandingPage from "@/pages/landing/page";
import SignInPage from "@/pages/auth/sign-in";
import SignUpPage from "@/pages/auth/sign-up";
import Dashboard from "@/pages/dashboard";
import Certificates from "@/pages/dashboard/certificates";
import SharedLinks from "@/pages/dashboard/shared";
import Analytics from "@/pages/dashboard/analytics";
import Profile from "@/pages/dashboard/profile";
import Settings from "@/pages/dashboard/settings";

const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUpPage />,
  },
];

const protectedRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />, // Updated to use Dashboard component
  },
  {
    path: "/dashboard/certificates",
    element: <Certificates />, // Will be replaced with Certificates component
  },
  {
    path: "/dashboard/shared",
    element: <SharedLinks />, // Will be replaced with Shared Links component
  },
  {
    path: "/dashboard/analytics",
    element: <Analytics />, // Will be replaced with Analytics component
  },
  {
    path: "/dashboard/profile",
    element: <Profile/>, // Will be replaced with Profile component
  },
  {
    path: "/dashboard/settings",
    element: <Settings />, // Will be replaced with Settings component
  },
];

const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

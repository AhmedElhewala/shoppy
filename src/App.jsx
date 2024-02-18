import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from "react-hot-toast"

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./ui/AppLayout";
import { useEffect, useState } from "react";
import Spinner from "./ui/Spinner";
import { useDispatch } from "react-redux";
import { getUser } from "./features/authentication/userSlice";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./features/authorization/ProtectedRoute";
import { useSelector } from "react-redux";
import Auth from "./pages/Auth";
import LoginForm from "./features/authentication/LoginForm";
import RegisterForm from "./features/authentication/RegisterForm";
import Category from "./pages/Category";
import CategoryProductList from "./features/category/CategoryProductList";
import Product from "./pages/Product";
import Search from "./pages/Search";
import { updateFullCart } from "./features/cart/cartSlice";
import WatchList from "./pages/WatchList";
import { updateFullWatchlist } from "./features/watchlist/watchlistSlice";
import Checkout from "./pages/Checkout";
import useKeepAuthenticated from "./hooks/useKeepAuthenticated";
import Profile from "./pages/Profile";
import UserPanel from "./features/administration/UserPanel";
import CategoryPanel from "./features/administration/CategoryPanel";
import ProductPanel from "./features/administration/ProductPanel";


const queryClient = new QueryClient();

function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  
  useKeepAuthenticated();

  useEffect(() => {
    const stopLoading = () => {
      setIsLoading(false);
    }
    window.addEventListener("load", stopLoading);

    return () => window.removeEventListener("load", stopLoading);
  }, []);

  useEffect(() => {
    if (!user) {
      dispatch(updateFullCart([]));
      dispatch(updateFullWatchlist([]));
    } else {
      const userId = user.id;
      const cartData = localStorage.getItem(`cart-${userId}`);
      const watchlistData = localStorage.getItem(`watchlist-${userId}`);
      dispatch(updateFullCart(cartData ? JSON.parse(cartData) : []));
      dispatch(updateFullWatchlist(watchlistData ? JSON.parse(watchlistData) : []));
    }
  }, [user, dispatch]);

  if (isLoading) return <Spinner />

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route 
              path="auth"
              element={
                <Auth />
              }
            >
              <Route
                index
                element={<Navigate to="login" replace />}
              />
              <Route 
                path="login"
                element={<LoginForm />} 
              />
              <Route 
                path="register"
                element={<RegisterForm />}
              />
            </Route>
            <Route 
              path="/" 
              element={
                <AppLayout>
                  <Home />
                </AppLayout>
              }
            />
            <Route
              path="dashboard"
              element={
                <AppLayout>
                  <ProtectedRoute authorizeRole={["admin"]}>
                    <Dashboard />
                  </ProtectedRoute>
                </AppLayout>
              } 
            >
              <Route
                index
                element={<Navigate to="user" replace />}
              />
              <Route 
                index 
                path="user"
                element={<UserPanel />}
              />
              <Route 
                path="category"
                element={<CategoryPanel />}
              />
              <Route 
                path="product"
                element={<ProductPanel />}
              />
            </Route>
            <Route 
              path="category"
              element={
                <AppLayout>
                  <ProtectedRoute authorizeRole={["customer", "admin"]}>
                    <Category />
                  </ProtectedRoute>
                </AppLayout>
              }
            >
              <Route 
                path=":id"
                element={<CategoryProductList />}
              />
            </Route>
            <Route
              path="product"
              element={
                <AppLayout>
                  <ProtectedRoute authorizeRole={["customer", "admin"]}>
                    <Product />
                  </ProtectedRoute>
                </AppLayout>
              }
            />
            <Route 
              path="watchlist" 
              element={
                <AppLayout>
                  <ProtectedRoute authorizeRole={["customer", "admin"]}>
                    <WatchList />
                  </ProtectedRoute>
                </AppLayout>
              } 
            />
            <Route 
              path="search"
              element={
                <AppLayout>
                  <Search />
                </AppLayout>
              }
            />
            <Route 
              path="checkout" 
              element={
                <AppLayout>
                  <ProtectedRoute authorizeRole={["customer", "admin"]}>
                    <Checkout />
                  </ProtectedRoute>
                </AppLayout>
              } 
            />
            <Route 
              path="profile" 
              element={
                <AppLayout>
                  <ProtectedRoute authorizeRole={["customer", "admin"]}>
                    <Profile />
                  </ProtectedRoute>
                </AppLayout>
              } 
            />
            <Route 
              path="*" 
              element={
                <AppLayout>
                  <ErrorPage />
                </AppLayout>
              }
            />
          </Routes>
        </Router>
        <Toaster 
          position="top-center"
          gutter={14}
          containerStyle={{margin: "5px"}}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000
            },
            style: {
              padding: "12px",
              backgroundColor: "var(--color-grey-300)",
              color: "var(--color-grey-800)",
              boxShadow: "0 0 8px 2px var(--color-grey-500)",
              zIndex: "9999999",
              lineHeight: "1.6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem"
            }
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
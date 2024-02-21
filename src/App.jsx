import { useEffect, Suspense, lazy } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import GlobalStyles from "./styles/GlobalStyles";
import { useSelector } from "react-redux";
import { getUser } from "./features/authentication/userSlice";
import useKeepAuthenticated from "./hooks/useKeepAuthenticated";

const Home = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const Category = lazy(() => import("./pages/Category"));
const Product = lazy(() => import("./pages/Product"));
const Search = lazy(() => import("./pages/Search"));
const WatchList = lazy(() => import("./pages/WatchList"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Profile = lazy(() => import("./pages/Profile"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Spinner = lazy(() => import("./ui/Spinner"));
const ProtectedRoute = lazy(() => import("./features/authorization/ProtectedRoute"));
const LoginForm = lazy(() => import("./features/authentication/LoginForm"));
const RegisterForm = lazy(() => import("./features/authentication/RegisterForm"));
const CategoryProductList = lazy(() => import("./features/category/CategoryProductList"));
const UserPanel = lazy(() => import("./features/administration/UserPanel"));
const CategoryPanel = lazy(() => import("./features/administration/CategoryPanel"));
const ProductPanel = lazy(() => import("./features/administration/ProductPanel"));

import { updateFullCart } from "./features/cart/cartSlice";
import { updateFullWatchlist } from "./features/watchlist/watchlistSlice";


const queryClient = new QueryClient();

function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useKeepAuthenticated();

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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
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
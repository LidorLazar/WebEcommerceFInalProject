import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "../src/bootstrap.min.css";
import Header from "./compomemts/Header";
import Footer from "./compomemts/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import OneProduct from "./Screen/OneProduct";
import "../src/index.css";
import Category from "./Screen/Category";
import Login from "./Login/Login";
import RegisterPage from "./Screen/Registar";
import Profile from "./Screen/UserProfile";
import Orders from "./Screen/Orders";
import UserProfile from "./Screen/UserProfile";
import UpdateProfile from "./Screen/UpdateProfile";
import Page404 from "./Screen/Page404";
import AbousUs from "./Screen/AbousUs";
import ErrorFallback from "./compomemts/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import CircularProgress from '@mui/material/CircularProgress';




const container = document.getElementById("root")!;
const root = createRoot(container);
const App = React.lazy(() => import("./App"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {}}
                >
                  <React.Suspense
                    fallback={
                      <div className='d-flex justify-content-center'>
                        <CircularProgress disableShrink />
                      </div>
                    }
                  >
                    <App />
                  </React.Suspense>
                </ErrorBoundary>
              }
            />

            <Route path="product/:id" element={<OneProduct />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="login/" element={<Login />} />
            <Route path="registar/" element={<RegisterPage />} />
            <Route path="orders/" element={<Orders />} />
            <Route path="profile/" element={<UserProfile />} />
            <Route path="profile/update" element={<UpdateProfile />} />
            <Route path="about/" element={<AbousUs />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  </Provider>
);

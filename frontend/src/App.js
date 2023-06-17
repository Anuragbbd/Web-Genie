import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import UserAuth from "./auth/UserAuth";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
<<<<<<< HEAD
=======
import React, { useState } from "react";
>>>>>>> b2efa60549e0bd0aafbe099eeb79c12ee8518d98
import Contact from "./components/main/Contact";
import SearchSetup from "./components/user/SearchSetup";
import SearchSystem from "./plugin/SearchSystem";
import About from "./components/main/About";
import WebpageManager from "./components/user/WebpageManager";
import TourGenerator from "./components/user/TourGenerator";
import ManageTour from "./components/user/ManageTours";
import ViewTour from "./components/user/ViewTour";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<Signin />} path="signin" />
              <Route element={<Signup />} path="signup" />
              <Route element={<Contact />} path="contact" />
              <Route element={<About />} path="about" />
            </Route>

            <Route
              element={
                // <UserAuth>
                // </UserAuth>
                <User />
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
              <Route path="searchsetup" element={<SearchSetup />} />
              <Route path="toursetup" element={<TourGenerator />} />
              <Route path="managetour" element={<ManageTour />} />
              <Route path="viewtour" element={<ViewTour pluginId={'647979dcb4170d325985d476'} />} />
              <Route path="webpagemanager" element={<WebpageManager />} />
              <Route path="tour" element={<TourGenerator />} />
            </Route>
            <Route path="search" element={<SearchSystem userid={'6469c8a166bc205c45ea9b23'} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;

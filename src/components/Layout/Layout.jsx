import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="app-layout">
     <header> <Navbar /></header>
      <main className="main-content"> {children} </main>
      <footer>My Footer</footer>
    </div>
  );
}

export default Layout;

import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm an h1 tag</h1>
 *         <h2>I'm an h2 tag</h2>
 *     </div>
 * </div>
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src="" alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img src="" alt="res-card" />
      <h2>Meghana Foods</h2>
      <h2>Biryani, Chinese, South Indian, North Indian</h2>
      <h2>40 min</h2>
      <h2>4.4 stars</h2>
    </div>
  );
};

const Body = () => {
  return (
    <div className="card-container">
      <div>Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

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
  return <div>Header</div>;
};

const Body = () => {
  return <div>Body</div>;
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

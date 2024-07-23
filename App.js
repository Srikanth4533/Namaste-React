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

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "Namaste React is Live!"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

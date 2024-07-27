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

// React Element
const Title = () => <h1 className="heading">Namaste React Using JSX 🚀 </h1>;

// React Functional Component
// Component Composition
const HeadingComponent1 = () => (
  <>
    <Title />
    <h1>Namaste Functional Component</h1>
  </>
);

const HeadingComponent2 = () => <h1>Namaste Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);

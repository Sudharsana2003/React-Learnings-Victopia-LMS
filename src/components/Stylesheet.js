import React from "react";
import "./myStyles.css"; // ✅ import the CSS from the same folder

const Stylesheet = (props) => {
  // Conditional class based on prop
  let className = props.primary ? "primary" : "";

  return (
    <div>
      {/* Apply multiple classes using template literals */}
      <h1 className={`${className} fontExcel`}>Stylesheets Example</h1>
    </div>
  );
};

export default Stylesheet;

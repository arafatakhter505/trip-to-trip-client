import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 md:px-6 md:py-3 rounded font-semibold">
      {title}
    </button>
  );
};

export default Button;

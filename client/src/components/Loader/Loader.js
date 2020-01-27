import React from "react";

const Loader = () => {
  return (
    <div
      className="spinner-border text-danger mt-5"
      role="status"
      style={{ position: "absolute", left: "50%" }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;

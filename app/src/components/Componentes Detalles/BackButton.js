import React from "react";

const BackButton = ({ onClick }) => (
  <button
    className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg hover:bg-[#0077b6] transition z-10"
    onClick={onClick}
  >
    Volver
  </button>
);

export default BackButton;

import React from "react";

const My_Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
      </div>
    </header>
  );
};

export default My_Header;
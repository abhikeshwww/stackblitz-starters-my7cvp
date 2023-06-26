import React from 'react';

const Button = (prop) => {
  const { name } = prop;

  return (
    <div className=" ml-3">
      <button className="px-2  m-1 bg-gray-100 border rounded-md">
        {name}
      </button>
    </div>
  );
};

export default Button;

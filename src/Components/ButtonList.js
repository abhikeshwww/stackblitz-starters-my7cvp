import React from 'react';
import Button from './Button';

export const ButtonList = () => {
  const list = ['All', 'Gaming', 'Cooking', 'Music', 'JavaScript', 'LoFi'];
  return (
    <div className="flex">
      {list.map((name) => {
        return <Button name={name} />;
      })}
    </div>
  );
};

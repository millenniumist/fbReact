import React from "react";

const MenuItem = (props) => {
  const { icon: Icon, text, ...restProps } = props;
  return (
    <div className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-none gap-2">
      
      <Icon {...restProps} />
      {text}
    </div>
  );
};

export default MenuItem;

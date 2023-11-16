import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    //プロパティ名に対して同じ要素名が入る場合は、「：」以降を省略できる。　ex)[color:color] → [color,]
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

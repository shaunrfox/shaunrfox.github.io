import React from "react";
import Icon, { IconProps } from "../../Icon";

const Paragraph: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M17.67 6H10.55C8.25001 6 6.24001 7.71 6.02001 10C5.77001 12.63 7.84001 14.85 10.42 14.85H11.25V17.67C11.25 17.85 11.4 18 11.58 18H12.42C12.6 18 12.75 17.85 12.75 17.67V7.2H14.4V17.67C14.4 17.85 14.55 18 14.73 18H15.57C15.75 18 15.9 17.85 15.9 17.67V7.2H17.67C17.85 7.2 18 7.05 18 6.87V6.33C18 6.15 17.85 6 17.67 6ZM11.25 13.65H10.61C9.58001 13.65 8.59001 12.98 8.02001 12.08C7.69001 11.61 7.50001 11.04 7.50001 10.42C7.50001 9.8 7.69001 9.23 8.02001 8.76C8.60001 7.86 9.58001 7.19 10.61 7.19H11.25V13.64V13.65Z" />
    </Icon>
  );
};

export default Paragraph;
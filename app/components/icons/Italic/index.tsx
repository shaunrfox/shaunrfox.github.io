import React from "react";
import Icon, { IconProps } from "../../Icon";

const Italic: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M15.275 6.01001H11.135C10.955 6.01001 10.805 6.16001 10.805 6.34001V6.87001C10.805 7.05001 10.955 7.20001 11.135 7.20001H12.345L10.425 16.8H8.735C8.555 16.8 8.405 16.95 8.405 17.13V17.66C8.405 17.84 8.555 17.99 8.735 17.99H14.065C14.245 17.99 14.395 17.84 14.395 17.66V17.13C14.395 16.95 14.245 16.8 14.065 16.8H11.955L13.875 7.21001H15.265C15.445 7.21001 15.595 7.06001 15.595 6.88001V6.34001C15.595 6.16001 15.445 6.01001 15.265 6.01001H15.275Z" />
    </Icon>
  );
};

export default Italic;
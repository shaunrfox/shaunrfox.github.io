import React from "react";
import Icon, { IconProps } from "../../Icon";

const Link: React.FunctionComponent<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M8.10501 14.55C7.00501 14.55 5.96501 13.64 5.75501 12.45C5.72501 12.3 5.70501 12.15 5.70501 12C5.70501 11.85 5.72501 11.69 5.75501 11.55C5.97501 10.36 7.00501 9.45 8.10501 9.45H9.87501C10.055 9.45 10.205 9.3 10.205 9.12V8.58C10.205 8.4 10.055 8.25 9.87501 8.25H8.06501C6.04501 8.25 4.30501 9.8 4.20501 11.81C4.09501 13.96 5.81501 15.75 7.94501 15.75H9.86501C10.045 15.75 10.195 15.6 10.195 15.42V14.88C10.195 14.7 10.045 14.55 9.86501 14.55H8.10501Z" />
      <path d="M14.675 11.4H9.335C9.15275 11.4 9.005 11.5478 9.005 11.73V12.27C9.005 12.4523 9.15275 12.6 9.335 12.6H14.675C14.8573 12.6 15.005 12.4523 15.005 12.27V11.73C15.005 11.5478 14.8573 11.4 14.675 11.4Z" />
      <path d="M18.255 12.45C18.045 13.64 17.005 14.55 15.905 14.55H14.135C13.955 14.55 13.805 14.7 13.805 14.88V15.42C13.805 15.6 13.955 15.75 14.135 15.75H16.055C18.185 15.75 19.905 13.96 19.795 11.81C19.695 9.8 17.965 8.25 15.945 8.25H14.135C13.955 8.25 13.805 8.4 13.805 8.58V9.12C13.805 9.3 13.955 9.45 14.135 9.45H15.905C17.005 9.45 18.035 10.36 18.255 11.55C18.285 11.69 18.305 11.84 18.305 12C18.305 12.15 18.285 12.3 18.255 12.45Z" />
    </Icon>
  );
};

export default Link;
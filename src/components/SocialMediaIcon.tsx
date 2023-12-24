import React from "react";
import FacebookIcon from "../assets/icons/FacebookIcon";
import XIcon from "../assets/icons/XIcon";
import { SxProps } from "@mui/material";

type SocialMediaIconProps = {
  name: string;
  sx: SxProps;
};

const SocialMediaIcon = ({ name, sx }: SocialMediaIconProps) => {
  let icon;

  switch (name) {
    case "facebook":
      icon = <FacebookIcon sx={sx} />;
      break;

    case "x":
      icon = <XIcon sx={sx} />;
      break;
  }
  return icon;
};

export default SocialMediaIcon;

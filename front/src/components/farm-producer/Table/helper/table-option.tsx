import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu } from "@mui/material";

interface ITableOptions {
  row: any;
  options: any[];
}

export const TableOption = ({ row, options }: ITableOptions) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => {
          return <div key={index}> {option.render(row, index)} </div>;
        })}
      </Menu>
    </>
  );
};


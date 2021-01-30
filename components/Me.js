import React from "react";

function Me({ name, whoAmI }) {
  return (
    <>
      <h2 className="headerName">{name}</h2>
      <h3 className="headerWhoAmI">{whoAmI}</h3>
    </>
  );
}

export default Me;

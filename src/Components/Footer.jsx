import React from "react";

const date = new Date();
const currentDate = date.getFullYear();
function Footer() {
  return <div>CopyRight @{currentDate}</div>;
}
export default Footer;

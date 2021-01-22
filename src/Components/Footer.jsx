import React from "react";

const date = new Date();
const currentDate = date.getFullYear();
function Footer() {
  return (
    <footer>
      <p>CopyRight @{currentDate}</p>
    </footer>
  );
}
export default Footer;

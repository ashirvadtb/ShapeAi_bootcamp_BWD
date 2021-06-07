import React from "react";
function Footer(){
  var CurrYear = new Date().getFullYear();
      return(
        <footer>
        <p>Copy right @ {CurrYear}</p>
        </footer>
      );  
      }
export default Footer;


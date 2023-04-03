import React from 'react';
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="footer">
      <Link className="icon1" to="https://www.linkedin.com/in/francisco-jos%C3%A9-rold%C3%A1n-ord%C3%B3%C3%B1ez-6a726112b/" target="_blank" title='LinkedIn'>
        <i className="fab fa-linkedin fa-lg mt-1 fa-2x"><span className="sr-only"></span></i>
      </Link>
      <Link className="icon1" to="https://github.com/roldanordonez1990" target="_blank" title='Git'>
        <i className="fab fa-github fa-lg mt-1 fa-2x"><span className="sr-only"></span></i>
      </Link>
    </footer>
  )
}

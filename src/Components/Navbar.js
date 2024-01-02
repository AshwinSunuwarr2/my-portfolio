// import React from "react";

// export default function Navbar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           {props.title}
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a
//                 className="nav-link"
//                 aria-disabled="false"
//                 href={`mailto:${props.myMail}?`}
//               >
//                 {props.myMail}
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { Component } from "react";
import "./NavbarStyle.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          {"</>"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Skills <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Education
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

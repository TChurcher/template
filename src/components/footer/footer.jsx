import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="grid-footer">
          <div className="footer1"> </div>
          <div className="footer1">
            <a className="a-navi" href="/impressum">
              Impressum
            </a>
            <a className="a-navi" href="/datenschutz">
              Datenschutz
            </a>
          </div>
          <div className="footer1"> </div>
          <div className="footer2"> </div>
          <div className="footer2"> </div>
          <div className="footer2"> </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

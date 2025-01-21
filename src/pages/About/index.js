import React, { Component } from "react";
import "./style.css";
import { tes } from "./Data";
import { GitHub, LinkedIn } from "@mui/icons-material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';



class Tes extends Component {
  display_tes = (_) => {
    let items = tes.map((item, index) => {
      return (
        <div
          className={`item item${index}  me-lg-0 me-md-4 me-sm-0 mb-lg-0 mb-5`}
          key={Math.random()}
        >
          <div className="p-profile mb-3 text-center">
          </div>
          <div className="user-primary text-center mb-4">
            <h5 className="name text-capitalize">{item.name}</h5>
            <h6 className="skill text-muted mb-4">{item.skill}</h6>
            <p className="testimonial">
              <span>
                <FormatQuoteIcon/>
              </span>{" "}
              {item.bio}.{" "}
              <span>
              <FormatQuoteIcon/>
              </span>
            </p>
          </div>
      </div>
      );
    });

    // Split items into top and bottom sections
    const halfIndex = Math.ceil(items.length / 2);
    const topItems = items.slice(0, halfIndex);
    const bottomItems = items.slice(halfIndex);

    return (
        <>
        <div className="top-items">
          {topItems}
        </div>
        <div className="bottom-items">
          {bottomItems}
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="tes py-5 mb-5" id="testimonials">
        <div className="container">
          <div className="title py-5 text-md-start text-center">
            <h4 className="sub-title text-capitalize">
              Our <span>Team</span>
            </h4>
          </div>
          <div className="box d-flex justify-content-lg-between justify-content-center flex-wrap">
            {this.display_tes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Tes;
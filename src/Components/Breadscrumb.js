import React from "react";
import { Link } from "react-router-dom";

const Breadscrumb = () => {
  return (
    <div className='p-3'>
      <p className='adminPanelOverviewSubTitleText'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='adminPanelOverviewSubDashboardTitle'>Home</span>
        </Link>
        {">"}

        <span className='adminPanelOverviewSubAmazonDashboardTitle'>
          Products
        </span>
      </p>
    </div>
  );
};

export default Breadscrumb;

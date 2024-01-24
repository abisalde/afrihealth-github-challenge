import React from "react";

const ContributionYears = ({ year }) => {
  return (
    <>
      <li className="year-listing" key={year}>
        {year}
      </li>
    </>
  );
};

export default ContributionYears;

import React, { useState } from "react";

const ContributionSvgGrid = ({ data }) => {
  const [pointX] = useState(14);

  const getDataLevel = (count) => {
    if (!count) return "0";
    if (count >= 1 && count <= 4) return "1";
    if (count >= 5 && count <= 9) return "2";
    if (count >= 10 && count <= 13) return "3";
    return "4";
  };

  return (
    <>
      <svg height="112" className="js-calendar-graph-svg">
        <g transform="translate(10, 20)">
          {data ? (
            data.map((week, i) => {
              let days = week.contributionDays;
              return (
                <g transform={`translate(${i * 14}, 0)`} key={i}>
                  {days.map((day, index) => {
                    // TODO: Brainstorm X value mutation
                    // if (index + 1 === days.length) setPointX(pointX - 1);
                    let pointY = index > days.length - 1 ? 0 : index * 13;
                    return (
                      <rect
                        width="10"
                        height="10"
                        x={pointX}
                        y={pointY}
                        className="contribution-calendar-day"
                        rx="2"
                        ry="2"
                        data-count={day.contributionCount}
                        data-date={day.date}
                        data-level={getDataLevel(day.contributionCount)}
                        key={index}
                      ></rect>
                    );
                  })}
                </g>
              );
            })
          ) : (
            <g transform="translate(0, 0)">
              <rect
                width="10"
                height="10"
                x="14"
                y="0"
                className="contribution-calendar-day"
                rx="2"
                ry="2"
                data-count="0"
                data-date="2020-10-18"
                data-level="0"
              ></rect>
            </g>
          )}

          <text x="14" y="-7" className="contribution-calendar-label">
            Oct
          </text>
          <text x="40" y="-7" className="contribution-calendar-label">
            Nov
          </text>
          <text x="120" y="-7" className="contribution-calendar-label">
            Dec
          </text>
          <text x="177" y="-7" className="contribution-calendar-label">
            Jan
          </text>
          <text x="222" y="-7" className="contribution-calendar-label">
            Feb
          </text>
          <text x="274" y="-7" className="contribution-calendar-label">
            Mar
          </text>
          <text x="326" y="-7" className="contribution-calendar-label">
            Apr
          </text>
          <text x="378" y="-7" className="contribution-calendar-label">
            May
          </text>
          <text x="443" y="-7" className="contribution-calendar-label">
            Jun
          </text>
          <text x="495" y="-7" className="contribution-calendar-label">
            Jul
          </text>
          <text x="547" y="-7" className="contribution-calendar-label">
            Aug
          </text>
          <text x="617" y="-7" className="contribution-calendar-label">
            Sep
          </text>
          <text x="694" y="-7" className="contribution-calendar-label">
            Oct
          </text>
          <text
            textAnchor="start"
            className="contribution-calendar-label"
            dx="-10"
            dy="8"
            style={{ display: "none" }}
          >
            Sun
          </text>
          <text
            textAnchor="start"
            className="contribution-calendar-label"
            dx="-10"
            dy="22"
          >
            Mon
          </text>
          <text
            textAnchor="start"
            className="contribution-calendar-label"
            dx="-10"
            dy="32"
            style={{ display: "none" }}
          >
            Tue
          </text>
          <text
            textAnchor="start"
            className="contribution-calendar-label"
            dx="-10"
            dy="48"
          >
            Wed
          </text>
          <text
            textAnchor="start"
            className="contribution-calendar-label"
            dx="-10"
            dy="57"
            style={{ display: "none" }}
          >
            Thu
          </text>
          <text
            textAnchor="start"
            className="contribution-calendar-label"
            dx="-10"
            dy="73"
          >
            Fri
          </text>
          <text
            textAnchor="start"
            className="contribution-calendar-label"
            dx="-10"
            dy="81"
            style={{ display: "none" }}
          >
            Sat
          </text>
        </g>
      </svg>
    </>
  );
};

export default ContributionSvgGrid;

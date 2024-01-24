import React, { Fragment, useState } from "react";
import data from "./data";

const convertDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = new Date(date).getMonth();
  return `${monthNames[month]}`;
};

const TestSite = () => {
  const [pointX] = useState(14);

  const testThis = data.reduce((acc, item) => {
    acc.push(...item.contributionDays);
    return acc;
  }, []);

  return (
    <Fragment>
      <div className="test">
        <h1>Welcome</h1>

        <svg height="112" className="js-calendar-graph-svg">
          <g transform="translate(10, 20)">
            {data.map((week, i) => {
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
                        data-level={0}
                        key={index}
                      ></rect>
                    );
                  })}
                </g>
              );
            })}

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

        {testThis.map((week, i) => {
          // let days = week.contributionDays;
          // console.log('daysTest', week);
          let date = week.date;

          return (
            <Fragment key={i}>
              <p>
                <span>{i}</span>
                <span>{convertDate(date).slice(0, 14)}</span>
              </p>
              {/* {days.map((day, i) => {
                                // console.log('day', day);

                                return (
                                    <ul
                                        key={i}
                                        className='contribution-calendar-label'
                                    >
                                        <li>
                                            <div style={{ margin: '0px 18px' }}>
                                                <span>{i}</span>
                                                <span>
                                                    {convertDate(day.date)}
                                                </span>
                                                <span>
                                                    {convertDate(day.date)}
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                );
                            })} */}
              ;
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TestSite;

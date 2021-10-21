import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Import Components
import ContributionYears from "../Shared/contributionYears";
import ContributionSvgGrid from "../Shared/contributionSvgGrid";

import "./contribution.css";

const Contributions = () => {
  const contributionData = useStaticQuery(graphql`
    query contributionQuery {
      allGithubData {
        nodes {
          data {
            user {
              contributionsCollection {
                contributionYears
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      weekday
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const profileContribution =
    contributionData.allGithubData.nodes[0].data.user.contributionsCollection;

  const graphData = profileContribution.contributionCalendar.weeks;

  const yearlyContribution = profileContribution.contributionYears;
  const totalContributionYear =
    profileContribution.contributionCalendar.totalContributions;

  return (
    <>
      <div className="contribution-container">
        <div className="contribution-content">
          <div className="responsive-contribution-content">
            <div className="contribution-grid-container">
              <div className="contribution-grid-item">
                <h3 className="pinned-heading">
                  {totalContributionYear}{" "}
                  <span>contributions in the last year</span>
                </h3>
                <div className="contribution-grid-item-container">
                  <div className="grid-item-graph">
                    <ContributionSvgGrid data={graphData} />
                    <div className="grid-item-footer">
                      <div className="footer-item-1">
                        <p>Learn how we count contributions</p>
                      </div>
                      <div className="footer-item-2">
                        Less{" "}
                        <svg width="10" height="10" className="graph-item-svg">
                          <rect
                            width="10"
                            height="10"
                            className="contribution-calendar-day"
                            rx="2"
                            ry="2"
                            data-level="0"
                          ></rect>
                        </svg>{" "}
                        <svg width="10" height="10" className="graph-item-svg">
                          <rect
                            width="10"
                            height="10"
                            className="contribution-calendar-day"
                            rx="2"
                            ry="2"
                            data-level="1"
                          ></rect>
                        </svg>{" "}
                        <svg width="10" height="10" className="graph-item-svg">
                          <rect
                            width="10"
                            height="10"
                            className="contribution-calendar-day"
                            rx="2"
                            ry="2"
                            data-level="2"
                          ></rect>
                        </svg>{" "}
                        <svg width="10" height="10" className="graph-item-svg">
                          <rect
                            width="10"
                            height="10"
                            className="contribution-calendar-day"
                            rx="2"
                            ry="2"
                            data-level="3"
                          ></rect>
                        </svg>{" "}
                        <svg width="10" height="10" className="graph-item-svg">
                          <rect
                            width="10"
                            height="10"
                            className="contribution-calendar-day"
                            rx="2"
                            ry="2"
                            data-level="4"
                          ></rect>
                        </svg>{" "}
                        More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="year-list-container">
            <div className="year-list-block">
              <div className="year-list-item">
                <ol>
                  {yearlyContribution &&
                    yearlyContribution.map(year => (
                      <ContributionYears key={year} year={year} />
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contributions;

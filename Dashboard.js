import React, { Component } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faCaretSquareLeft,
  faCaretSquareRight,
  faMapMarker,
  faCogs,
  faCode,
  faAddressBook,
  faHome,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import Sidebar from "./Sidebar";

const state = {
  labels: ["jan", "fab", "mar", "apr", "may", "jun"],
  datasets: [
    {
      backgroundColor: "rgb(72, 83, 173)",
      label: "Rainfall",
      data: [67, 84, 70, 57, 69, 81],
    },
  ],
};

const state1 = {
  labels: ["Html", "CSS", "ANGULAR"],
  datasets: [
    {
        backgroundColor: [
            'rgba(238, 235, 235, 0.315)',
            'rgb(114, 110, 110)',
            'rgb(34, 56, 224)'
          ],
          hoverBackgroundColor: [
          'rgba(238, 235, 235, 0.315)',
          'rgb(114, 110, 110)',
          'rgb(34, 56, 224)'
          ],
      data: [80, 84, 70],
    },
  ],
};

const state2 = {
  labels: ["", "", "", "", "", "", ""],
  datasets: [
    {
      borderWidth: 2,
      label: "Rainfall",
      borderColor: "rgb(72, 83, 173)",
      data: [55, 80, 70, 74, 68, 78, 74],
    },
  ],
};

const state4 = {
  labels: ["jan", "fab", "mar", "apr", "may", "jun"],
  datasets: [
    {
      backgroundColor: "rgb(72, 83, 173)",
      label: "Author",
      data: [67, 71, 75, 73, 78, 81],
    },
    {
      backgroundColor: "lightgrey",
      label: "Customer",
      data: [70, 73, 77, 74, 79, 82],
    },
  ],
};

export default function Dashboard() {
  return (
    <>
      <div className="main">
        <div>
          <Sidebar />
        </div>

        <div>
          <div className="top_nav">
            <div className="d-flex">
              <h6 className="ml-3 dash">DashBoard</h6>
              <FontAwesomeIcon className="ficon" icon={faHome} />
              <p className="ml-3">Dashboards</p>
              <p className="ml-3">Navy Aside</p>
            </div>

            <div>
              <p className="mr-5 dash2">
                Today: <b>Aug 16 </b>
                <FontAwesomeIcon icon={faCalendar} />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="topOne">
                <div className="top_line">
                  <p className="top_heading">Author Sales</p>
                  <FontAwesomeIcon className="ficon" icon={faEllipsisH} />
                </div>
                <div className="chart1">
                  <p>
                    $<span className="dollar">64M</span>
                  </p>
                  <div>
                    <Bar
                      data={state}
                      options={{
                        title: {
                          fontSize: 20,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="top1">
                <div className="top_line">
                  <p className="top_heading">Technologies</p>
                  <FontAwesomeIcon className="ficon" icon={faEllipsisH} />
                </div>
                <div className="chart1">
                  <p>
                    <span className="dollar">9.3M</span>
                  </p>
                  <div>
                    <Doughnut
                      data={state1}
                      options={{
                        title: {
                          fontSize: 10,
                        },
                        legend: {
                          display: true,
                          position: "left",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="top1">
                <div className="top_line">
                  <p className="top_heading">Total Orders</p>
                  <FontAwesomeIcon className="ficon" icon={faEllipsisH} />
                </div>
                <div className="chart1">
                  <p>
                    <span className="dollar">17M</span>
                  </p>
                  <div>
                    <Line
                      data={state2}
                      options={{
                        title: {
                          fontSize: 10,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="top">
                <div className="top_line">
                  <p className="top_heading">ANNOUNCEMENTS</p>
                  <span>
                    <FontAwesomeIcon
                      className="ficon"
                      icon={faCaretSquareLeft}
                    />
                    <FontAwesomeIcon
                      className="ficon"
                      icon={faCaretSquareRight}
                    />
                  </span>
                </div>
                <div className="pb-4">
                  <p className="ann_head1">Incredibly Positive Reviews</p>
                  <p className="ann_head2">
                    To start a blog, think of a topic about and first brainstorm
                    party is ways to write details
                  </p>
                  <div className="ann_btn">
                    <p className="ann_date">17 NOV,2018</p>
                    <button className="button">VIEW</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="top">
                <div className="top_line">
                  <p className="top_heading">PROJECTS</p>
                  <span>
                    <FontAwesomeIcon
                      className="ficon"
                      icon={faCaretSquareLeft}
                    />
                    <FontAwesomeIcon
                      className="ficon"
                      icon={faCaretSquareRight}
                    />
                  </span>
                </div>
                <div className="pb-2">
                  <p className="ann_head1">First Milestone Achivement</p>
                  <p className="ann_head2">
                    To start a blog, think of a topic about and first brainstorm
                    party is ways to write details
                  </p>
                  <div className="pro_prgr">
                    <p className="pro_progress">progress</p>
                    <p className="pro_precentage">55%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="top">
                <div className="top_line">
                  <p className="top_heading">TODAY'S SCHEDULE</p>
                  <span>
                    <FontAwesomeIcon
                      className="ficon"
                      icon={faCaretSquareLeft}
                    />
                    <FontAwesomeIcon
                      className="ficon"
                      icon={faCaretSquareRight}
                    />
                  </span>
                </div>
                <div className="pb-5">
                  <p className="TS_head1">UI/UX Design Updates</p>
                  <p className="TS_head2">11:15 - 12:30PM</p>
                  <div className="TS_btn">
                    <p className="TS_location">
                      <FontAwesomeIcon icon={faMapMarker} /> 246 R St. Manhattan
                      NY_
                    </p>
                    <button className="button">VIEW MAP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="top">
                <div className="bottom_line">
                  <p className="top_heading">Top Products</p>
                  <FontAwesomeIcon className="ficon" icon={faEllipsisH} />
                </div>
                <div className="faAllIcon">
                  <FontAwesomeIcon className="fa1icon" icon={faCogs} />
                  <FontAwesomeIcon className="faicon" icon={faCode} />
                  <FontAwesomeIcon className="faicon" icon={faAddressBook} />
                </div>
                <div className="pb-4">
                  <div className="html">
                    <div>
                      <p className="html1 ml-4">HTML 5 Templates</p>
                      <p className="html2 ml-4">Front-end Admin & Email</p>
                    </div>
                    <div>
                      <p>+79%</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="html">
                    <div>
                      <p className="html1 ml-4">Wordpress Themes</p>
                      <p className="html2 ml-4">eCommerce Website, Plugin</p>
                    </div>
                    <div>
                      <p>+21%</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="html">
                    <div>
                      <p className="html1 ml-4">eCommerce Websites</p>
                      <p className="html2 ml-4">
                        Shops, Fasion wep sites & atc
                      </p>
                    </div>
                    <div>
                      <p>-16%</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="html">
                    <div>
                      <p className="html1 ml-4">UI/UX Design</p>
                      <p className="html2 ml-4">Everything you ever imagine</p>
                    </div>
                    <div>
                      <p>+4%</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="html">
                    <div>
                      <p className="html1 ml-4">Freebie Themes</p>
                      <p className="html2 ml-4">Front-end & Admin</p>
                    </div>
                    <div>
                      <p>+34%</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="top">
                <div className="bottom_line">
                  <p className="top_heading">Sales Statistics</p>
                  <FontAwesomeIcon className="ficon" icon={faEllipsisH} />
                </div>
                <div>
                  <Bar
                    data={state4}
                    options={{
                      title: {
                        fontSize: 20,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

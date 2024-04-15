import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../home/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        A Chart App Application, is a representation of data that transforms the data into 
visual components. Charts are used to display series of numeric data in a graphical format 
to make it easier to understand large quantities of data and the relationship between 
different series of data.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Line chart"
          description="A line chart is a type of graph that displays information as a series of data points connected by straight line segments. It is commonly used to visualize trends over time or to show the relationship between two variables. The horizontal axis typically represents the independent variable (such as time or categories), while the vertical axis represents the dependent variable (such as values or quantities). "
        />

        <InformationCard
          title="Barcharts"
          description="A bar chart is a type of graph that represents data using rectangular bars, where the length of each bar corresponds to the magnitude of the data it represents. The bars can be either vertical or horizontal, depending on the orientation of the chart."
        />

        <InformationCard
          title="3Dcharts"
          description="3D charts, also known as three-dimensional charts, are graphical representations of data that incorporate three dimensions: length, width, and height. Unlike traditional 2D charts that are confined to a flat plane, 3D charts add depth to the visual presentation, allowing for a more immersive and potentially more informative display.."
        />
      </div>
    </div>
  );
}

export default Info;
import React, { useEffect, useState } from "react";
import "../home/Doc.css";

function Doc() {
 

  return (
   <div>
   <h1> charts information</h1>
   <br></br>

   <section id="selectionbrances">
       <div className="course">
           <img src="images\line.jpg" />
           <div className="fig">
               <h2>Line chat</h2>
               <p>It is a chart that shows a line joining several points or a line that shows the relation between the points. The graph represents quantitative data between two changing variables with a line or curve that joins a series of successive data points. </p>
           </div>
       </div>
       <div className="course">
           <img src="images\bar (1).jpg" />
           <div className="fig">
               <h2>bar chart</h2>
               <p>A bar graph is a graphical representation of information. It uses bars that extend to different heights to depict value. Bar graphs can be created with vertical bars, horizontal bars</p>
       
           </div>
       </div>
       <div className="course">
           <img src="images\scatter.jpg" />
           <div className="fig">
               <h2>scatter plot</h2>
               <p>Scatter charts are designed to reveal patterns, trends, and potential correlations between the variables being studied. Each marker's placement on the chart corresponds to the specific values for the two variables associated with that data point.</p>
      
           </div>
     </div>
       <div class="course">
           <img src="images\whisper.jpg" alt=""/>
           <div className="fig">
               <h2>whisper plot</h2>
               <p>A box and whisker plot or diagram (otherwise known as a boxplot), is a graph summarising a set of data. The shape of the boxplot shows how the data is distributed and it also shows any outliers. It is a useful way to compare different sets of data as you can draw more than one boxplot per graph.</p>
           </div>
       </div>  
       
   </section>
   </div>
   

   
  );
}

export default Doc;

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
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis explicabo maiores illum deserunt, consequatur voluptatem inventore sint natus, officiis ad dolorem aspernatur sapiente dolorum voluptatum vitae commodi optio minus! </p>
           </div>
       </div>
       <div className="course">
           <img src="images\bar (1).jpg" />
           <div className="fig">
               <h2>bar chart</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis sunt at mollitia et sequi nobis explicabo fuga aliquid molestias numquam assumenda velit, aut laudantium eum illo libero id praesentium?</p>
       
           </div>
       </div>
       <div className="course">
           <img src="images\scatter.jpg" />
           <div className="fig">
               <h2>scatter plot</h2>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, a quidem. Placeat quaerat veritatis fugiat. Ex, recusandae ab? Voluptatibus nostrum recusandae et corporis aperiam iste nisi doloribus nam eum? Earum.</p>
      
           </div>
     </div>
       <div class="course">
           <img src="images\whisper.jpg" alt=""/>
           <div className="fig">
               <h2>whisper plot</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at cum perspiciatis rem accusamus placeat quisquam facilis nostrum sapiente minima. Nesciunt sequi tempore nisi laborum quasi, corrupti praesentium eligendi expedita?</p>
           </div>
       </div>  
       
   </section>
   </div>
   

   
  );
}

export default Doc;

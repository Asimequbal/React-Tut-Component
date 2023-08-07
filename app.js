import React from "react";
import  ReactDOM from  "react-dom/client";



// component inside a element
const HeadingComponent = () => (
    <div id="container">
       
        <h1 className="camelcase">htis sjfsdgn</h1>
    </div>
);
const Title =  (
    <h1 className="he">My Name is asim using JSX
    <HeadingComponent />
    </h1>
    
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( Title);
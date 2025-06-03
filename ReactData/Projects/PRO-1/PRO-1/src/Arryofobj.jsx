import React from "react";
export default function Arrayofobj(id,name,subject)
{
   return(
        <div>
            <h1>Arryofobj</h1>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{subject}<li>
            </ul>
        </div>
    );
}
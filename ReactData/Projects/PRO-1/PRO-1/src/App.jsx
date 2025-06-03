import React from "react";
import Arrayofobj from "./App";

export default function App(){
    const arr = [
        { id: 1, name: "rahul", subject: "react" },
    { id: 2, name: "sumit", subject: "node" },
    { id: 3, name: "puneet", subject: "css" },
    { id: 4, name: "vinay", subject: "express" },
    { id: 5, name: "raj", subject: "java" },
    ];
}

return
(
    <div>
    <Arrayofobj data={arr} student={"sumit"}/>
    </div>
)
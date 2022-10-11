import React from "react";
import { useLoaderData } from "react-router-dom";
import StatData from "./StatData";

const Statistics = () => {
    const data = useLoaderData();
    const loadedDatas = data.data;
return (
    <div>
        <StatData loadedData={loadedDatas}></StatData>
    </div>
);
    
};

export default Statistics;
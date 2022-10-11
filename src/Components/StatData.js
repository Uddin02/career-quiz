import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const StatData = ({loadedData}) => {
    // console.log(loadedData)
    return (
        <div className="m-10 grid justify-items-center justify-center">
                <h1 className='text-center font-bold text-sky-400 text-lg mb-10 md:ml-10'>Total Questions In The Topics</h1>
                <div style={{ width: 400, height: 500}}>
                    <ResponsiveContainer>
                        <BarChart
                            data={loadedData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                            barSize={50}>

                            <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 25 }}/>
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Bar dataKey="total" fill="#8884d8" background={{ fill: "#eee" }}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
        </div>
    );
};

export default StatData;
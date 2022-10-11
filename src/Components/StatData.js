import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const StatData = ({loadedData}) => {
    // console.log(loadedData)
    return (
        <div className="m-10">
                <h1 className='text-center font-bold text-sky-400 text-lg mb-10'>Total Questions In The Topics</h1>
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                        width={500}
                        height={100}
                        data={loadedData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        barSize={50}>

                        <XAxis dataKey="name" scale="point" padding={{ left: 25, right: 25 }}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Bar dataKey="total" fill="#8884d8" background={{ fill: "#eee" }}/>
                    </BarChart>
                </ResponsiveContainer>
        </div>
    );
};

export default StatData;
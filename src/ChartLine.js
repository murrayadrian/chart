import React from 'react'
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line, ReferenceLine } from 'recharts'

export const ChartLine = () => {
    return (
        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={3000} label="Max" stroke="black" strokeDasharray="3 3" />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    )
}
const data = [
    {
      "name": "12:00",
      "pv": 55,
      "amt": 2400
    },
    {
      "name": "1:00",
      "pv": 6,
      "amt": 2210
    },
    {
      "name": "2:00",
      "pv": 70,
      "amt": 2290
    },
    {
      "name": "3:00",
      "pv": 3,
      "amt": 2000
    },
    {
      "name": "4:00",
      "pv": 63,
      "amt": 2181
    },
    {
      "name": "5:00",
      "pv": 63,
      "amt": 2500
    },
    {
      "name": "6:00",
      "pv": 63,
      "amt": 2100
    },
    {
      "name": "7:00",
      "pv": 75,
      "amt": 2100
    },
    {
      "name": "8:00",
      "pv": 35,
      "amt": 2100
    },
    {
      "name": "9:00",
      "pv": 65,
      "amt": 2100
    },
    {
      "name": "10:00",
      "pv": 40,
      "amt": 2100
    },
    {
      "name": "11:00",
      "pv": 40,
      "amt": 2100
    }
  ]
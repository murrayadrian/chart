import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export const ChartBar = () => {
    return (
      <>
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            
            <Bar dataKey="pv" fill="#F05D5E" />
            <Bar dataKey="uv" fill="#4FB5C9" />
        </BarChart>
        <Legend/>
        </>
    )
}
const data = [
    {
      "name": "06 March",
      "uv": 120000,
      "pv": 0
    },
    {
      "name": "07 March",
      "uv": 0,
      "pv": -120000
    },
    {
      "name": "08 March",
      "uv": 220000,
      "pv": 0
    },
    {
      "name": "09 March",
      "uv": 0,
      "pv": -50000
    },
    {
      "name": "10 March",
      "uv": 0,
      "pv": -30000
    },
    {
      "name": "11 March",
      "uv": 30000,
      "pv": 0
    },
    {
      "name": "12 March",
      "uv": 120000,
      "pv": 0
    }
  ]
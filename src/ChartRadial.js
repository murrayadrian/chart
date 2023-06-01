import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts"

export const ChartRadial = () => {
    return (
        <RadialBarChart
            width={730}
            height={500}
            innerRadius="30%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={-180}
        >
            <RadialBar minAngle={15} background clockWise={false} dataKey='uv' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
        </RadialBarChart>
    )
}
const data = [
    {
      "name": "Bank",
      "uv": 1000,
      "pv": 1000,
      "fill": "#F3BA2F"
    },
    {
      "name": "Token",
      "uv": 600,
      "pv": 4567,
      "fill": "#54C2C1"
    },
    
    {
      "name": "Cash",
      "uv": 600,
      "pv": 9800,
      "fill": "#0F0F3F"
    },
    {
        "name": "Stock",
        "uv": 400,
        "pv": 1398,
        "fill": "#9020E9"
      },
  ]
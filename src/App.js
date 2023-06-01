import {ChartRadial} from './ChartRadial'
import { ChartLine } from './ChartLine'
import { ChartBar } from './ChartBar'
function App() {
  return (
    <div className='container'>
        <ChartLine/>
    <div className="wrapper">
        <ChartRadial/>
        <ChartBar/>
    </div>
    </div>
  )
}
export default App
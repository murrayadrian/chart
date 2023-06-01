import {ChartRadial} from './ChartRadial'
import { ChartLine } from './ChartLine'
import { ChartBar } from './ChartBar'
function App() {
  return (
    <div className='container'>
      <div className="top">
        <ChartLine/>
      </div>
      <div className="wrapper">
          <div className="left">
            <ChartRadial/>
          </div>
          <div className="right">
            <ChartBar/>
          </div>
      </div>
    </div>
  )
}
export default App
import {ChartRadial} from './ChartRadial'
import { ChartLine } from './ChartLine'
import { ChartBar } from './ChartBar'
function App() {
  {console.log(null +1);}
  return (
    <div className='container'>
      <div className="top">
        <ChartLine/>
      </div>
      <div className="wrapper">
            <ChartRadial/>
          <div className="right">
            <ChartBar/>
          </div>
      </div>
    </div>
  )
}
export default App
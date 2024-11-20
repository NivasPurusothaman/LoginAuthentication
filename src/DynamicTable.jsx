import React, { useEffect, useState } from 'react'
import axios from 'axios'
import emptyCircle from "./assets/empty circle.png"
import partiallyFilledCircle from "./assets/partially filled circle.png"
import quarterlyFilledCircle from "./assets/quarterly filled circle.png"
import "./styles/dynamictable.css"

function DynamicTable() {

    const [headerApiData, setHeaderApiData] = useState([])
    const firstHeader = [{processname:"Employee Name"}]
    const [bodyApiData, setBodyApiData] = useState([])

    useEffect(()=>{
      axios.get("http://13.202.143.30:4001/api/processitem")
      .then((res)=>setHeaderApiData(res.data.results))
    },[])

    useEffect(()=>{
      axios.get("http://13.202.143.30:4001/api/Skillmatrix")
      .then((res)=>setBodyApiData(res.data))
    },[])

    const finalHeaders = firstHeader.concat(headerApiData)

  return (
    <div className='dynamicTableDiv'>
      <table className='dynamicTableTable'>
        <thead>
          <tr>
            {finalHeaders.map((header, index)=>
            <th className='dynamicTableTh' key={index}>{header.processname}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {bodyApiData.map((item, index)=>
            <tr key={index}>
              <td className='dynamicTableTd'>{item.Employee_name}</td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[0].processname) ).toString()
                  == headerApiData[0].processname ? 
                  (item[headerApiData[0].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                    <img src={quarterlyFilledCircle} /> :
                    <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[1].processname) ).toString()
                  == headerApiData[1].processname ? 
                  (item[headerApiData[1].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[2].processname) ).toString()
                  == headerApiData[2].processname ? 
                  (item[headerApiData[2].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[3].processname) ).toString()
                  == headerApiData[3].processname ? 
                  (item[headerApiData[3].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[4].processname) ).toString()
                  == headerApiData[4].processname ? 
                  (item[headerApiData[4].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[5].processname) ).toString()
                  == headerApiData[5].processname ? 
                  (item[headerApiData[5].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[6].processname) ).toString()
                  == headerApiData[6].processname ? 
                  (item[headerApiData[6].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[7].processname) ).toString()
                  == headerApiData[7].processname ? 
                  (item[headerApiData[7].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[8].processname) ).toString()
                  == headerApiData[8].processname ? 
                  (item[headerApiData[8].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[9].processname) ).toString()
                  == headerApiData[9].processname ? 
                  (item[headerApiData[9].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[10].processname) ).toString()
                  == headerApiData[10].processname ? 
                  (item[headerApiData[10].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[11].processname) ).toString()
                  == headerApiData[11].processname ? 
                  (item[headerApiData[11].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[12].processname) ).toString()
                  == headerApiData[12].processname ? 
                  (item[headerApiData[12].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[13].processname) ).toString()
                  == headerApiData[13].processname ? 
                  (item[headerApiData[13].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[14].processname) ).toString()
                  == headerApiData[14].processname ? 
                  (item[headerApiData[14].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[15].processname) ).toString()
                  == headerApiData[15].processname ? 
                  (item[headerApiData[15].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[16].processname) ).toString()
                  == headerApiData[16].processname ? 
                  (item[headerApiData[16].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[17].processname) ).toString()
                  == headerApiData[17].processname ? 
                  (item[headerApiData[17].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
              <td className='dynamicTableTd'>
                {
                  (Object.keys(item)).filter( (item) => (item == headerApiData[18].processname) ).toString()
                  == headerApiData[18].processname ? 
                  (item[headerApiData[18].processname] == "Level 2" ?
                    <img src={partiallyFilledCircle} /> :
                    <img src={emptyCircle} />
                  ) : ((item.null == "Level 1") ? 
                  <img src={quarterlyFilledCircle} /> :
                  <img src={emptyCircle} />
                  )
                }
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable
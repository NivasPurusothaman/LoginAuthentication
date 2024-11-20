import React, { useEffect, useState  } from 'react'
import axios from 'axios'
import { useStoreState } from 'easy-peasy';
import "./styles/pages.css"

function Pages() {

  const userDetails = useStoreState((state) => state.userDetails)

  const [pageData, setPageData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 100

  useEffect(()=>{
    axios.get("http://52.66.153.167:6001/api/bomMaster", {
        params: {
            page: pageNumber,
            limit: itemsPerPage
        },
      headers: {
        'x-access-token': userDetails[0].payload.token
      }
    })
    .then((res)=>{setPageData(res.data.results.bomMasters); setTotalPages(res.data.results.totalPages)})
    .catch((err)=>console.log(err.message))
  },[pageNumber])

  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber((prev) => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1)
    }
  }

  const handleSearchOperation = (data) => {
    setPageData(pageData.filter((item)=>(item._id).includes(data.toLowerCase())))
  }

  return (
    <div className="pagesContainer">
      <div className='searchDiv'>
        <input type="text" placeholder='Search by ID' onChange={(e)=>handleSearchOperation(e.target.value)} />
      </div>
      <div className="pagesTableDiv">
        <table className="pagesTable">
          <thead>
            <tr>
              <th className="pagesTableTh">Id</th>
              <th className="pagesTableTh">Citemno</th>
              <th className="pagesTableTh">Citemno currency</th>
              <th className="pagesTableTh">Description</th>
              <th className="pagesTableTh">Part number</th>
              <th className="pagesTableTh">Qty</th>
              <th className="pagesTableTh">Created at</th>
              <th className="pagesTableTh">Updated at</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((item) => (
              <tr key={item._id}>
                <td className="pagesTableTd">{item._id}</td>
                <td className="pagesTableTd">{item.citemno}</td>
                <td className="pagesTableTd">{item.citemno_currency}</td>
                <td className="pagesTableTd">{item.item_description}</td>
                <td className="pagesTableTd">{item.part_number}</td>
                <td className="pagesTableTd">{item.qty_par_per}</td>
                <td className="pagesTableTd">{item.createdAt}</td>
                <td className="pagesTableTd">{item.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginationBtn">
        <button
           onClick={handlePrevPage} disabled={pageNumber === 1}
        >
          Prev
        </button>
        {/* {pageNoArray.map((number) => (
          <button key={number} onClick={() => handlePageDataShow(number)}>
            {number}
          </button>
        ))} */}
        <button
           onClick={handleNextPage} disabled={pageNumber === totalPages}
        >
          Next
        </button>
      </div>
      <p>
        Page {pageNumber} of {totalPages}
      </p>
    </div>
  );
}

export default Pages
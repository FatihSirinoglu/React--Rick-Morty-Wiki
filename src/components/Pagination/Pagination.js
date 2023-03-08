import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ( {info, setPageNumber, pageNumber} ) => {
    return (<ReactPaginate 
        className="pagination justify-content-center gap-3 my-4" 
        pageCount={info?.pages} 
        nextLabel="Next" 
        previousLabel="Prev" 
        nextClassName="btn btn-light" 
        previousClassName="btn btn-light"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        onPageChange={(data)=>{
            setPageNumber(data.selected + 1)
        }}
        forcePage={pageNumber===1? 0 : pageNumber - 1}
    />)



    //     let next = () => {
//         setPageNumber((x)=> x+1)
//     };
//     let prev = () => {
//         if(pageNumber===1)return(
//             setPageNumber((x)=> x-1)
//         )
//     };
//   return (
//     <div className='container d-flex justify-content-center gap-5'>
//         <button onClick={prev} className="btn btn-primary">Prev</button>
//         <button onClick={next} className="btn btn-primary">Next</button>
//     </div>
//   )
}

export default Pagination
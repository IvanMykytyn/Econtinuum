import React from 'react'

// icons
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const PaginationList = ({
  page,
  changePage,
  totalTasks,
  amount,
  maxNumOfPages,
}) => {
  const LEFT_LIMIT = page - maxNumOfPages
  const RIGHT_LIMIT = page + maxNumOfPages
  // total number of pages
  const numOfPages = Math.ceil(totalTasks / amount)

  // create numbers sequence
  let pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })

  // filter depend on maxNumOfPages
  pages = pages.filter((num) => {
    if (num <= RIGHT_LIMIT && num >= LEFT_LIMIT) {
      return num
    }
  })

  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    changePage(newPage)
  }
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    changePage(newPage)
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li className="pagination__btn" onClick={prevPage}>
          <BsChevronLeft size={22} />
        </li>
        {/* show the dots on the left side*/}
        {LEFT_LIMIT > 1 && (
          <>
            <li className="pagination__numbers" onClick={() => changePage(1)}>
              1
            </li>
            {/* hide the dots if the difference between the numbers only 1*/}
            {LEFT_LIMIT - 1 > 1 && <li className="pagination__dots">...</li>}
          </>
        )}
        {/* show pagination and active page*/}
        {pages.map((pageNumber) => {
          if (pageNumber === page)
            return (
              <li
                key={pageNumber}
                className="pagination__numbers active"
                onClick={() => changePage(pageNumber)}
              >
                {pageNumber}
              </li>
            )
          else
            return (
              <li
                key={pageNumber}
                className="pagination__numbers"
                onClick={() => changePage(pageNumber)}
              >
                {pageNumber}
              </li>
            )
        })}
        {/* show the dots on the right side*/}
        {RIGHT_LIMIT < numOfPages && (
          <>
            {/* hide the dots if the difference between the numbers only 1*/}
            {numOfPages - RIGHT_LIMIT > 1 && (
              <li className="pagination__dots">...</li>
            )}
            <li
              className="pagination__numbers"
              onClick={() => changePage(numOfPages)}
            >
              {numOfPages}
            </li>
          </>
        )}
        <li className="pagination__btn" onClick={nextPage}>
          <BsChevronRight size={22} />
        </li>
      </ul>
    </div>
  )
}
export default PaginationList

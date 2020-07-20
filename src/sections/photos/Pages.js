import React from "react";

export default function Pages(props) {
  const lastPage = props.lastPage;
  const currentPage = props.currentPage;
  const setPage = props.setPage;
  let first = 0;
  let second = 0;
  let third = 0;
  if (currentPage === 1) {
    first = currentPage;
    second = currentPage + 1;
    third = currentPage + 2;
  } else if (currentPage === lastPage) {
    first = currentPage - 2;
    second = currentPage - 1;
    third = currentPage;
  } else {
    first = currentPage - 1;
    second = currentPage;
    third = currentPage + 1;
  }
  return (
    <div className="pages-container">
      {currentPage !== first && first !== 1 && lastPage > 3 && (
        <p className="info-text">...</p>
      )}
      <p className="info-text" onClick={() => setPage(first)}>
        {first}
      </p>
      <p className="info-text" onClick={() => setPage(second)}>
        {second}
      </p>
      <p className="info-text" onClick={() => setPage(third)}>
        {third}
      </p>
      {currentPage !== third && lastPage !== third && lastPage > 3 && (
        <p className="info-text">...</p>
      )}
    </div>
  );
}

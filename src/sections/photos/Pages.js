import React from "react";
import PageNumber from "./PageNumber";

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
  const pages = [first, second, third];
  return (
    <div className="pages-container">
      {currentPage !== first && first !== 1 && lastPage > 3 && (
        <div className="pages-container">
          <p className="info-text" onClick={() => setPage(1)}>
            1
          </p>
          <h6 className="info-text">. . .</h6>
        </div>
      )}
      {pages.map((page) => {
        return (
          <PageNumber page={page} setPage={setPage} currentPage={currentPage} />
        );
      })}
      {currentPage !== third && lastPage !== third && lastPage > 3 && (
        <div className="pages-container">
          <h6 className="info-text">. . .</h6>
          <p className="info-text" onClick={() => setPage(lastPage)}>
            {lastPage}
          </p>
        </div>
      )}
    </div>
  );
}

import React from "react";
import Pages from "./Pages";

export default function Pagination(props) {
  const setPage = props.setPage;
  const currentPage = props.currentPage;
  const lastPage = props.lastPage;
  return (
    <div className="pagination-container">
      <div className="pagination-buttons-container">
        <button onClick={() => currentPage > 1 && setPage(currentPage - 1)}>
          Back
        </button>
        <p className="info-text">
          Page {currentPage} of {lastPage}
        </p>
        <button
          onClick={() => currentPage < lastPage && setPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      {lastPage > 2 && (
        <Pages
          lastPage={lastPage}
          currentPage={currentPage}
          setPage={setPage}
        />
      )}
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import Pages from "./Pages";

export default function Pagination(props) {
  const { setPage, currentPage, lastPage } = props;
  return (
    <div className="pagination-container">
      <div className="pagination-buttons-container">
        <button
          onClick={() => currentPage > 1 && setPage(currentPage - 1)}
          type="button"
        >
          Back
        </button>
        <p className="info-text">
          Page {currentPage} of {lastPage}
        </p>
        <button
          onClick={() => currentPage < lastPage && setPage(currentPage + 1)}
          type="button"
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

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

import React from "react";
import PropTypes from "prop-types";
import PageNumber from "./PageNumber";

export default function Pages(props) {
  const { lastPage } = props;
  const { currentPage } = props;
  const { setPage } = props;
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
          <div
            onClick={() => setPage(1)}
            role="button"
            tabIndex={0}
            onKeyPress={() => setPage(lastPage)}
          >
            <p className="info-text">1</p>
          </div>
          <h6 className="info-text">. . .</h6>
        </div>
      )}
      {pages.map((page) => {
        return (
          <PageNumber
            page={page}
            setPage={setPage}
            currentPage={currentPage}
            key={page}
          />
        );
      })}
      {currentPage !== third && lastPage !== third && lastPage > 3 && (
        <div className="pages-container">
          <h6 className="info-text">. . .</h6>
          <div
            onClick={() => setPage(lastPage)}
            onKeyPress={() => setPage(lastPage)}
            role="button"
            tabIndex={0}
          >
            <p className="info-text">{lastPage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

Pages.propTypes = {
  lastPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

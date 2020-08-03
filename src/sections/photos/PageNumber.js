import React from "react";
import PropTypes from "prop-types";

export default function PageNumber(props) {
  const { currentPage, page, setPage } = props;
  const className = currentPage === page ? "currentPage" : "info-text";
  return (
    <div
      className={className}
      onClick={() => setPage(page)}
      onKeyPress={() => {}}
      role="button"
      tabIndex={0}
    >
      <p>{page}</p>
    </div>
  );
}

PageNumber.propTypes = {
  currentPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

import React from "react";

export default function PageNumber(props) {
  const className =
    props.currentPage === props.page ? "currentPage" : "info-text";
  return (
    <p className={className} onClick={() => props.setPage(props.page)}>
      {props.page}
    </p>
  );
}

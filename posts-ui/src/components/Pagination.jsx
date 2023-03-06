import React from 'react';
import classes from './Pagination.module.css';

function Pagination({ totalPages, currentPage, onPageChange, isLoading }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className={classes.btnGroup}>
      {!isLoading &&
        totalPages > 1 &&
        pages.map((page) => (
          <button
            className={classes.button}
            key={page}
            onClick={() => handleClick(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
    </div>
  );
}

export default Pagination;

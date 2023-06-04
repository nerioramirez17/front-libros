import React, { useState, Dispatch, SetStateAction } from 'react';
import { PaginationText } from './pagination.styles';
import { Button, ButtonGroup } from '@mui/material';


const Pagination: React.FC<{ totalItems: number, setCurrentPage: Dispatch<SetStateAction<number>>, currentPage: number }> = ({ totalItems, setCurrentPage, currentPage }) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
    }
  };

  return (
    <ButtonGroup>
      { currentPage !== 1 && 
        <Button onClick={handlePreviousPage}>
          Previous
        </Button>
      }
      <Button
          variant={'contained'}
        >
        <PaginationText style={{textTransform: 'lowercase'}}> {currentPage} de {totalItems}</PaginationText>
      </Button>
     { currentPage !== totalPages && 
        <Button onClick={handleNextPage}>
          Next
        </Button>
      }
    </ButtonGroup>
  );
};

export default Pagination;

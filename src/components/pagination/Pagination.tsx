import React, { useState } from 'react';
import cn from 'classnames';
import css from './Pagination.module.scss';

interface PaginationProps {
  activePage: number; //which is active
  totalItems: number; //count of elements
  perPage: number; //elem on page
  withActions?: boolean; //prev-next
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
  onChangePage: (newPage: number) => void;
}

export const Pagination = ({
  activePage,
  totalItems,
  perPage,
  withActions,
  classes,
  onChangePage
}: PaginationProps) => {
  const elemCount = Math.floor(totalItems / perPage);
  const [current, setCurrent] = useState<number>(activePage);

  const changePage = (newCurrent: number) => {
    setCurrent(newCurrent);
    onChangePage(newCurrent);
  };

  return (
    <div>
      {withActions && (
        <button className={css.btnNav} onClick={() => changePage(current - 1)} disabled={current === 1}>
          Previous
        </button>
      )}

      {Array.from({ length: elemCount }).map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              changePage(index + 1);
            }}
            className={cn(css.btn, classes?.btn, {
              [classes?.activeBtn || '']: activePage === index + 1,
              [classes?.activeBtn || '']: current === index + 1
            })}
          >
            {index + 1}
          </button>
        );
      })}

      {withActions && (
        <button
          className={css.btnNav}
          onClick={() => changePage(current + 1)}
          disabled={current === totalItems}
        >
          Next
        </button>
      )}
    </div>
  );
};

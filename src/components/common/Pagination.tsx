import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

type PropsType = {
  onPageChanged: (number: number) => void;
  totalUsersCount: number;
  pageSize: number;
  portionSize?: number;
};

export const PaginationBasic: React.FC<PropsType> = ({
  onPageChanged,
  totalUsersCount,
  pageSize,
  portionSize = 6,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Pagination>
        {portionNumber > 2 ? (
          <Pagination.First
            onClick={() => {
              setPortionNumber(portionNumber - 2);
            }}
          />
        ) : null}
        {portionNumber > 1 ? (
          <>
            <Pagination.Prev
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            />
            <Pagination.Ellipsis />
          </>
        ) : null}

        {pages
          .filter(
            (number) =>
              number >= leftPortionPageNumber &&
              number <= rightPortionPageNumber
          )
          .map((number) => {
            return (
              <Pagination.Item
                key={number}
                onClick={(e) => {
                  onPageChanged(number);
                }}
              >
                {number}
              </Pagination.Item>
            );
          })}

        {portionCount > portionNumber ? (
          <>
            <Pagination.Ellipsis />
            <Pagination.Next
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            />
          </>
        ) : null}

        {portionCount > portionNumber + 1 ? (
          <Pagination.Last
            onClick={() => {
              setPortionNumber(portionNumber + 2);
            }}
          />
        ) : null}
      </Pagination>
    </div>
  );
};

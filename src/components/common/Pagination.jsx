import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const PaginationBasic = ({
  onPageChanged,
  totalUsersCount,
  pageSize,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />

        <Pagination.Ellipsis />

        {pages.map((number) => {
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

        <Pagination.Ellipsis />

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

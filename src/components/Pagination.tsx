"use client";
import React from "react";
import { Community, Response } from "@/types/types";
import { CommunityCard } from "./CommunityCard";

interface PaginationProps {
  initialValues: Response;
}

export const Pagination = ({ initialValues }: PaginationProps) => {
  const [data, setData] = React.useState(initialValues);
  const [page, setPage] = React.useState(initialValues.page);
  const isPreviousDisabled = page === 1;
  const isNextDisabled = page === data.pageCount;

  function onPrevious() {
    if (isPreviousDisabled) {
      return;
    }

    fetchData(page - 1);
  }

  function onNext() {
    if (isNextDisabled) {
      return;
    }

    fetchData(page + 1);
  }

  async function fetchData(page: number) {
    const response = await fetch(
      `https://api-colombia.com/api/v1/NativeCommunity/pagedList?SortBy=name&SortDirection=DESC&Page=${page}&PageSize=5`
    );
    const nextData = await response.json();
    setData(nextData);
    setPage(nextData.page);
  }

  return (
    <>
      {data.data.map((community: Community, index: number, arr) => (
        <div key={community.id}>
          <CommunityCard community={community} />
          {index < arr.length - 1 && <hr />}
        </div>
      ))}
      <button onClick={onPrevious} disabled={isPreviousDisabled}>
        Previous
      </button>{" "}
      -{" "}
      <button onClick={onNext} disabled={isNextDisabled}>
        Next
      </button>
    </>
  );
};

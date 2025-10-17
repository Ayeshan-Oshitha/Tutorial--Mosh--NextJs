"use client";
import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  console.log("Error occurred:", error);

  return (
    <>
      <div className="text-red-500">An unexpected error has occured</div>
      <button
        className="btn btn-error mt-4"
        onClick={() => {
          reset();
        }}
      >
        Retry
      </button>
    </>
  );
};

export default ErrorPage;

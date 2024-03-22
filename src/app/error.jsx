"use client";

const error = ({ error, reset }) => {
  return (
    <div>
      error <button onClick={reset}>Try again</button>
      <p>{error.message}</p>
    </div>
  );
};

export default error;

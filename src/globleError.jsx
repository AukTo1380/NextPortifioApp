"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string },
  reset: () => void,
}) {
  return (
    <html lang="en">
      <head>
        <title>Error Occurred</title>
      </head>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  );
}

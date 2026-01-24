export function ProcessIcon({ type }: { type: string }) {
  switch (type) {
    case "consultation":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-64 w-64 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M7 8h10M7 12h6M5 21l2-2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );

    case "design":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-64 w-64 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M12 20l9-5-9-5-9 5 9 5z" />
          <path d="M12 12l9-5-9-5-9 5 9 5z" />
        </svg>
      );

    case "material":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-64 w-64 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 17l9 4 9-4" />
          <path d="M3 12l9 4 9-4" />
        </svg>
      );

    case "execution":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-64 w-64 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );

    default:
      return null;
  }
}

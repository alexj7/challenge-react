/**
 * Search Icon component.
 *
 * @returns {JSX.Element}
 */
export const SearchIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

/**
 * Left Arrow Icon Component.
 *
 * @returns {JSX.Element}
 */
export const LeftArrowIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mt-1 ml-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);

/**
 * Left Arrow Icon Component.
 *
 * @returns {JSX.Element}
 */
export const FavoriteIcon = ({ onClick, favorite }: { onClick: () => void, favorite: boolean }): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill={favorite ? 'orange' : 'none'}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={favorite ? 'orange' : '#9196A1'}
      className="w-6 h-6 cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};



/**
 * Link Component.
 *
 * @returns {JSX.Element}
 */
export const LinkIcon = ({ onClick }: { onClick: () => void }): JSX.Element => (
  <svg
    onClick={onClick}
    className="w-6 h-6 cursor-pointer mt-0.5 pt-0.5"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V11M11 1H17M17 1V7M17 1L7 11"
      stroke="#9196A1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


/**
 * Loader component with animation.
 *
 * @returns {JSX.Element} Loader element.
 */
export const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-blue-500 border-opacity-75"></div>
    </div>
  );
};


import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/16/solid";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  hasMoreItems: boolean;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  hasMoreItems,
}: PaginationProps) => {
  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (hasMoreItems) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-[95%] mx-auto my-5 sm:my-10">
      <div className="flex items-center justify-end space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPrev()}
          className="paginate-btn"
        >
          <ArrowLongLeftIcon className="h-6 w-6" />
          Prev
        </button>

        <button
          disabled={!hasMoreItems}
          onClick={() => goToNext()}
          className="paginate-btn"
        >
          Next
          <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

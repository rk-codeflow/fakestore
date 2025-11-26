import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/16/solid";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({ currentPage, setCurrentPage }: PaginationProps) => {
  return (
    <div className="w-[95%] mx-auto my-5 sm:my-10">
      <div className="flex items-center justify-end space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="text-pink-500 disabled:text-gray-300 flex items-center gap-x-2 cursor-pointer"
        >
          <ArrowLongLeftIcon className="h-6 w-6 cursor-pointer" />
          Prev
        </button>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="text-pink-500 disabled:text-gray-300 flex items-center gap-x-2 cursor-pointer"
        >
          <ArrowLongRightIcon className="h-6 w-6 cursor-pointer text-pink-500" />
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

interface LoadMoreButtonProps {
  onclick: () => void;
}
const Pagination = ({ onclick }: LoadMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-6">
      <button onClick={onclick} className="border px-6 py-2 rounded-lg ">
        Load More
      </button>
    </div>
  );
};
export default Pagination;

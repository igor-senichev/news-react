import Pagination from '../Pagination/Pagination';

const PaginationWrapper = ({ top, botton, children, ...paginationProps }) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {botton && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;

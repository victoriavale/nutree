const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  return (

    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Anterior
      </button>

      <h6>
        Página {currentPage} de {totalPages}
      </h6>

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Siguiente
      </button>

    </div>
  );
};

export default Pagination;
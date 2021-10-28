export const Pagination = ({
  activePage,
  totalPages,
  onNext,
  onPrevious,
  loading,
}) => {
  return (
    <>
      <div className="pagination">
        <button disabled={activePage === 1 || loading} onClick={onPrevious}>
          ⬅️ Anterior
        </button>
        <button
          disabled={activePage === totalPages || loading}
          onClick={onNext}
        >
          Próximo ➡️
        </button>
      </div>
      <p>
        Página {activePage} de {totalPages}
      </p>
    </>
  );
};

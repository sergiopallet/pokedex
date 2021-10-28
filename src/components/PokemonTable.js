import "./styles.css";

const columns = [
  { accessor: "name", label: "Nome" },
  { accessor: "url", label: "url" },
];

const renderTableColumn = (row, column) => {
  return (
    <td key={column.accessor}>
      {column.accessor === "url" ? (
        <a href={row[column.accessor]} target="_blank" rel="noreferrer">
          {row[column.accessor]}
        </a>
      ) : (
        row[column.accessor]
      )}
    </td>
  );
};

const Table = ({ columns, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column.accessor}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column) => renderTableColumn(row, column))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const PokemonTable = ({ pokemons }) => {
  return <Table rows={pokemons} columns={columns} />;
};

import "./styles.css";

const columns = [
  { accessor: "name", label: "Nome" },
  { accessor: "url", label: "url" },
];

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
        {rows.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map((column) => {
                return (
                  <td key={column.accessor}>
                    {column.accessor === "url" ? (
                      <a
                        href={row[column.accessor]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {row[column.accessor]}
                      </a>
                    ) : (
                      row[column.accessor]
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const PokemonList = ({ pokemons }) => {
  return <Table rows={pokemons} columns={columns} />;
};

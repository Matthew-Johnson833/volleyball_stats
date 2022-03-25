

export default function BasicTable({  }) {
  let servingArray = JSON.parse(localStorage.getItem('servingArray'));
  let servingArrayValues = Object.values(servingArray);

/*  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  }  = useTable ({
    columns,
    data
  }) */

/*   return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  ) */


/*   const columns = useMemo( 
    () => [
      {
        // group 1 --> serving stats
        Header: "Serving",
        // servinge stat columns
        columns: [
          {
            Header: "Service Aces",
            accessor: "show.servingAce"
          },
          {
            Header: "Service Errors",
            accessor: "show.servingError"
          }, 
          {
            Header: "In %",
            accessor: "show.servingInPercentage"
          }
        ]
      },
      {
        // group 2 --> hitting stats
        Header: "Hitting",
        // hitting stat columns
        columns: [
          {
            Header: "ATT",
            accessor: "show.hittingAttempts"
          },
          {
            Header: "KILLS",
            accessor: "show.hittingKill"
          },
          {
            Header: "ERR",
            accessor: "show.hittingError"
          },
          {
            Header: "HIT %",
            accessor: "show.hittingPercentage"
          }
        ]
      }
    ]
  ) */
}
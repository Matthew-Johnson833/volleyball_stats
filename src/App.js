import StatGroup from "./components/StatGroup";
import Stats from "./components/testModalComponents/OpenStatsComponentTest";
import Table from "./components/testModalComponents/testReactTable";

function App() {
  
// creation of the test table for stat display
/*   const columns = useMemo(
    () => [
      {
        // group 1 --> serving stats
        Header: "Serving",
        // serving stat columns
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
  
  return (
    <div className="App">
      <StatGroup />
      <Stats />
    </div>

    // This is a test table using React-Table
    // https://blog.logrocket.com/complete-guide-building-smart-data-table-react/
    /*     <div className="App">
          <Table columns={columns} data={data} />
        </div> */
  );
}

export default App;

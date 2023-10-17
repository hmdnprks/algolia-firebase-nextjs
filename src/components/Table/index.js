import { useHits } from "react-instantsearch";
import TableHit from "../TableHit";

const Table = () => {
  const { hits } = useHits();

  console.log('hits :>> ', hits);

  return (
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Role
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Last Update
                      </th>
                  </tr>
              </thead>
              <TableHit hits={hits} />
          </table>
      </div>
  )
}

export default Table;
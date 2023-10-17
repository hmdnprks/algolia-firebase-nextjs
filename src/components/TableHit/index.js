import dayjs from "dayjs";

const TableHit = ({ hits }) => {
  return (
    <tbody>
      {hits.map((hit) => (
        <tr className="bg-white dark:bg-gray-800" key={hit.id}>
          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {hit.name}
          </td>
          <td className="px-6 py-4">
              {hit.email}
          </td>
          <td className="px-6 py-4">
              {hit.role}
          </td>
          <td className="px-6 py-4">
              {hit.updatedAt ? dayjs(hit.updatedAt).format("DD/MM/YYYY") : '-'}
          </td>
        </tr>
      ))}
    </tbody>
  )
}

  export default TableHit;
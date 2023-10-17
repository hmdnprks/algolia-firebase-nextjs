import Image from "next/image";
import algoliasearch from "algoliasearch/lite";
import { useEffect, useState } from "react";
import { InstantSearch, SearchBox, PoweredBy } from "react-instantsearch";
import Hit from "@src/components/Hit";
import TableHit from "@src/components/TableHit";
import Table from "@src/components/Table";

export default function Home() {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
  );

  const [movies, setMovies] = useState([]);


  return (
    <div>
      <div className="mb-6 w-2/4 m-auto">
        <InstantSearch
            searchClient={searchClient}
            indexName='admin'
        >
           <div className='container-search-hits'>
              <SearchBox classNames={{
                form: "relative flex",
                input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                submitIcon: "right-2 top-2.5 w-4 h-4 text-gray-400 absolute pointer-events-none dark:text-gray-300",
              }} placeholder='Search for movies' />
              <PoweredBy className="w-2/5 my-2" />
              <Table />
            </div>
        </InstantSearch>
      </div>

    </div>
  )
}
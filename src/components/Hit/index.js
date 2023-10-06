import Image from "next/image";
import { Highlight } from "react-instantsearch";

const Hit = ({ hit }) => {
  return (
    <div class="max-w-sm mb-5 rounded overflow-hidden bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <Image className="m-auto" src={hit.imageUrl} width={150} height={300} alt={hit.name} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <Highlight attribute="name" hit={hit} />
        </div>
        <p class="text-white text-base">
          <Highlight attribute="overview" hit={hit} />
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        {hit.genre.map((item, index) => (
          <span key={`genre-${index}`} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Hit;
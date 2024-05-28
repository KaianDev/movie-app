import { useState } from "react"
import { CardsGrid } from "./cards-grid"

type FiltersType = "all" | "adventure" | "horror"

export const MainContent = () => {
  const [filterType, setFilterType] = useState<FiltersType>("all")

  const filters: FiltersType[] = ["all", "adventure", "horror"]

  const handleChangeFilter = (filter: FiltersType) => {
    setFilterType(filter)
  }

  return (
    <div className="bg-[#f8f9fa] py-36">
      <div className="container mx-auto px-4 md:px-10 space-y-8">
        <h1 className="font-bold text-4xl">Popular topics</h1>

        <div className="space-x-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleChangeFilter(filter)}
              className={`text-sm font-semibold pb-1 border-b border-transparent capitalize hover:border-red-500 hover:text-red-500 
              ${filter === filterType && "text-red-500"}`}>
              {filter}
            </button>
          ))}
        </div>

        <CardsGrid />
      </div>
    </div>
  )
}

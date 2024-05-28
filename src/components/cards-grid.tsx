import { useState } from "react"
import { series } from "../data/series"
import { CardItem } from "./card-item"

export const CardsGrid = () => {
  const [data, setData] = useState(series)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((serie) => (
        <CardItem key={serie.id} serie={serie} />
      ))}
    </div>
  )
}

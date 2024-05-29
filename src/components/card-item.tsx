import { Serie } from "../types/serie"

interface CardItemProps {
  serie: Serie
}

export const CardItem = ({ serie }: CardItemProps) => {
  return (
    <div className="w-full overflow-hidden rounded-md bg-white shadow">
      <div className="relative group">
        <img
          src={serie.cover}
          alt={serie.title}
          className="w-full h-[280px] object-cover object-top md:object-center"
        />
        {serie.badges && serie.badges?.length > 0 && (
          <div className="absolute flex -top-9 group-hover:top-3 right-3 gap-2 ease-in duration-300">
            {serie.badges.map((badge) => (
              <div
                key={badge}
                className="uppercase font-semibold text-white py-1 px-2 text-xs bg-white/15 rounded-md">
                {badge}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-5 space-y-3">
        <p className="text-[#6C757D] text-sm">{serie.date}</p>
        <h2 className="text-lg font-semibold">{serie.title}</h2>
        <p className="text-[#6C757D] font-light">{serie.description}</p>
      </div>
    </div>
  )
}

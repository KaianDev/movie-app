export const Hero = () => {
  return (
    <div className="h-[600px] w-full bg-[url('/bg.png')] bg-no-repeat bg-center bg-[#0A0C0D] relative">
      {/* Gradient */}
      <div className="bg-gradient-to-r from-[#0a0c0d] h-full absolute inset-0" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-10 relative flex flex-col gap-4 justify-end h-full pb-10">
        {/* Badge */}
        <div className="bg-[#393A3B] font-bold text-white w-max px-3 py-1 rounded-xl">
          ADVENTURE
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
          suscipit!
        </h1>

        {/* Infos */}
        <div>
          <p className="text-white font-semibold">08.08.2021</p>
          <p className="text-[#FF8221] max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab animi
            velit distinctio autem, assumenda ratione veritatis. Magni facilis
            doloribus tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

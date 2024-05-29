export const Banner = () => {
  return (
    <section className="h-[510px] bg-[url('/bg-2.png')] bg-cover flex items-center justify-center flex-col gap-3">
      <h2 className="max-w-[530px] text-center text-white text-4xl font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p className="max-w-[420px] text-sm text-white/80 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </p>
      <div className="w-8 border-b mt-4" />
      <p className="text-sm text-white/80">08.08.2021</p>
    </section>
  )
}

import StoreLinks from "../common/StoreLinks"

function Review() {
  return (
    <section id="reviews" className="flex flex-col items-center justify-between max-w-7xl px-8 py-20 lg:m-auto lg:px-12 lg:flex-row">
        <article className="mb-10 flex flex-col justify-center items-center lg:items-start lg:w-1/2">
            <h2 className="mb-4 max-w-[16ch] text-4xl font-semibold text-gray-800 text-center lg:w-full lg:text-left">
                Join other thousands of people growing with Kobodrop
            </h2>
            <StoreLinks />
        </article>
    </section>
  )
}

export default Review
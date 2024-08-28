function Hero () {
    return (
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        <br className="hidden lg:inline-block" />
    Come fast!!!!
      </h1>
      <p className="mb-8 leading-relaxed">
      E-commerce, also known as electronic commerce, refers to the buying and selling of goods and services over the internet.
It has revolutionized the way people shop, making it possible to purchase anything from anywhere in the world with just a few clicks.
The rise of e-commerce has led to the growth of online marketplaces, such as Amazon, eBay, and Alibaba, which connect buyers and sellers from all over the world.
E-commerce offers numerous benefits, including convenience, cost-effectiveness, and a wider range of products to choose from.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Like
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          buy!!
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadPP2X3SzWcD3mScVE98_KxoaHsa7iDwCnw&s"
      />
    </div>
  </div>
</section>

    )
}
export default Hero;
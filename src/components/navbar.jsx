export default function navbar() {
  return (
    <>
      <nav className="mx-[24rem] mt-6 bg-zinc-900/20 backdrop-blur-lg rounded-full fixed top-0 left-0 right-0 z-50 px-4 py-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/slashlogo.jpeg"
            alt="Logo"
            className="h-8 w-8 mr-2 rounded-full"
          />
          <p className="font-semibold text-2xl">Slash</p>
        </div>

        <img
          src="/hamburger.svg"
          alt="Menu"
          className="md:hidden h-6 w-6"
          id="menu-btn"
        />

        <div className="hidden md:flex space-x-8" id="nav-links">
          <a
            href="/"
            className="text-zinc-900 hover:text-zinc-500 transition-all ease-soft-spring duration-250 font-medium text-lg"
          >
            Home
          </a>
          <a
            href="products"
            className="text-zinc-900 hover:text-zinc-500 transition-all ease-soft-spring duration-250 font-medium text-lg"
          >
            Products
          </a>
        </div>
      </nav>
    </>
  );
}

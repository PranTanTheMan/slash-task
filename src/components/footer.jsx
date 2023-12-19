export default function Footer() {
  return (
    <footer class="bg-white text-black border border-zinc-950 h-2xl">
      <div class="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
        <div class="flex items-center">
          <img src="/slashlogo.jpeg" alt="Logo" class="h-10 mr-3" />
          <span class="font-bold text-lg">Slash</span>
        </div>
        <div class="flex space-x-4">
          <a
            href="/"
            class="text-zinc-900 hover:text-zinc-500 transition-all ease-soft-spring duration-250 font-medium text-lg"
          >
            Home
          </a>
          <a
            href="products"
            class="text-zinc-900 hover:text-zinc-500 transition-all ease-soft-spring duration-250 font-medium text-lg"
          >
            Products
          </a>
        </div>
      </div>
    </footer>
  );
}

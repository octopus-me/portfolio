import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex justify-between w-full items-center px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">My Personal Page</h1>
        <nav className="flex gap-6 text-sm sm:text-base">
          <a href="#about" className="hover:underline hover:underline-offset-4">
            About
          </a>
          <a href="#projects" className="hover:underline hover:underline-offset-4">
            Projects
          </a>
          <a href="#contact" className="hover:underline hover:underline-offset-4">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <Image
          className="rounded-full border border-foreground"
          src="/foto.jpg" 
          alt="Sua foto"
          width={200}
          height={200}
          priority
        />
        <h2 className="text-3xl sm:text-4xl font-bold">Guilherme Wallace</h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Welcome to my page! Dive in to discover who I am, what I build, and how I’m navigating the world of tech—one project at a time.
        </p>
        <div className="flex gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#projects"
          >
            Veja meus Projetos
          </a>
          <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#contact"
          >
            Entre em Contato
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex flex-col items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; 2025 Guilherme Wallace. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

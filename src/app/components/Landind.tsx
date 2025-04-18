import Image from "next/image";
import Projects from "./Projects";
import Technologies from "./Technologies";

export default function Landing() {
    return (
      <main className="flex flex-col items-center text-center px-6 sm:px-16 lg:px-32 py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center">
          <Image
            className="rounded-full border border-gray-300 shadow-lg mt-20"
            src="/foto.jpg"
            alt="Foto de Guilherme Wallace"
            width={160}
            height={160}
            priority
          />
          <h1 className="text-4xl font-bold mt-10">Guilherme Wallace</h1>
          <p className="text-lg text-gray-600 max-w-xl mt-5">
              Welcome! Dive in to discover who I am, what I build, and how I’m navigating the world of tech—one project at a time.
          </p>

        </section>

        {/*Technologies*/}
        <Technologies/>



  
        {/* Contato */}
        <section id="contact" className="text-center">

          <div className="flex gap-4 mt-6 justify-center">
            <a href="https://github.com" target="_blank" className="text-xl text-gray-600 hover:text-black">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-xl text-gray-600 hover:text-black">
              LinkedIn
            </a>
            <a href="mailto:email@example.com" className="text-xl text-gray-600 hover:text-black">
              Email
            </a>
          </div>
        </section>
  
      </main>
    );
  }
  
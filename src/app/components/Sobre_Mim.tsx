export default function Sobre_Mim(){
    return(
        <section className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Sobre Mim</h2>
          <p className="text-lg text-gray-600 mt-4">
            Sou um desenvolvedor apaixonado por criar interfaces modernas e funcionais. Trabalho com tecnologias como <strong>React, Next.js, Tailwind CSS</strong> e muito mais.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="bg-gray-200 px-4 py-2 rounded-full">React</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full">Next.js</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full">Tailwind</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full">TypeScript</span>
          </div>
        </section>
    )
}
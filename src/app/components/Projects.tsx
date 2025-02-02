export default function Projects(){
    return(
        <section id="projects" className="max-w-4xl">
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Projeto 1</h3>
              <p className="text-gray-600 mt-2">Descrição breve do projeto.</p>
              <a className="text-blue-600 mt-4 block" href="#">Ver mais →</a>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Projeto 2</h3>
              <p className="text-gray-600 mt-2">Descrição breve do projeto.</p>
              <a className="text-blue-600 mt-4 block" href="#">Ver mais →</a>
            </div>
          </div>
        </section>
    )
}
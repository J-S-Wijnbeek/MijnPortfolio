import EyeBackground from './components/EyeBackground';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';
import SoftSkillsSection from './components/soft-skills-section';
import About from './components/about';
import ProjectCard from './components/ProjectCard';

const projectPlaceholders = [
  {
    title: 'Project 1',
    description: 'Korte beschrijving van project 1 komt hier.',
  },
  {
    title: 'Project 2',
    description: 'Korte beschrijving van project 2 komt hier.',
  },
  {
    title: 'Project 3',
    description: 'Korte beschrijving van project 3 komt hier.',
  },
  {
    title: 'Project 4',
    description: 'Korte beschrijving van project 4 komt hier.',
  },
  {
    title: 'Project 5',
    description: 'Korte beschrijving van project 5 komt hier.',
  },
  {
    title: 'Project 6',
    description: 'Korte beschrijving van project 6 komt hier.',
  },
  {
    title: 'Project 7',
    description: 'Korte beschrijving van project 7 komt hier.',
  },
  {
    title: 'Project 8',
    description: 'Korte beschrijving van project 8 komt hier.',
  },
  {
    title: 'Project 9',
    description: 'Korte beschrijving van project 9 komt hier.',
  },
  {
    title: 'Project 10',
    description: 'Korte beschrijving van project 10 komt hier.',
  },
  {
    title: 'Project 11',
    description: 'Korte beschrijving van project 11 komt hier.',
  },
  {
    title: 'Project 12',
    description: 'Korte beschrijving van project 12 komt hier.',
  },
  {
    title: 'Project 13',
    description: 'Korte beschrijving van project 13 komt hier.',
  },
  {
    title: 'Project 14',
    description: 'Korte beschrijving van project 14 komt hier.',
  },
  {
    title: 'Project 15',
    description: 'Korte beschrijving van project 15 komt hier.',
  },
];

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <EyeBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <section id="home" className="flex justify-center items-center px-6 text-center">
            <div className="text-center text-9xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">
              Welkom bij mijn portfolio
            </div>
          </section>
          <div className="mt-[1200px] flex flex-col gap-[300px]">
            <div className="mx-auto w-full max-w-5xl px-6">
              <h2 className="mb-10 text-center text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">
                Over Mij
              </h2>
              <About />
            </div>

            <div className="mx-auto w-full px-6 lg:w-2/3">
              <h2 className="mb-10 text-center text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">
                Skills
              </h2>
              <SkillsSection />
            </div>

            <div className="mx-auto w-full px-6 lg:w-2/3">
              <h2 className="mb-10 text-center text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">
                Soft Skills
              </h2>
              <SoftSkillsSection />
            </div>

            <section id="projects" className="mx-auto w-full max-w-none px-6">
              <h2 className="mb-10 text-center text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">
                Projects
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
                {projectPlaceholders.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </section>

            <section id="contact" className="mx-auto w-full max-w-5xl px-6">
              <h2 className="mb-10 text-center text-6xl font-bold bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">
                Contact
              </h2>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-gray-200">
                <p className="text-lg">
                  Interesse in samenwerken of een vraag? Neem contact met me op via een van de kanalen hieronder.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <a
                    href="mailto:jouw@email.com"
                    className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 transition hover:border-blue-300 hover:bg-blue-500/20"
                  >
                    <p className="text-sm uppercase tracking-wide text-blue-200">E-mail</p>
                    <p className="mt-1 text-lg font-semibold text-white">jouw@email.com</p>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jouw-profiel"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 transition hover:border-blue-300 hover:bg-blue-500/20"
                  >
                    <p className="text-sm uppercase tracking-wide text-blue-200">LinkedIn</p>
                    <p className="mt-1 text-lg font-semibold text-white">linkedin.com/in/jouw-profiel</p>
                  </a>

                  <a
                    href="https://github.com/jouw-gebruikersnaam"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 transition hover:border-blue-300 hover:bg-blue-500/20"
                  >
                    <p className="text-sm uppercase tracking-wide text-blue-200">GitHub</p>
                    <p className="mt-1 text-lg font-semibold text-white">github.com/jouw-gebruikersnaam</p>
                  </a>

                  <a
                    href="tel:+310612345678"
                    className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 transition hover:border-blue-300 hover:bg-blue-500/20"
                  >
                    <p className="text-sm uppercase tracking-wide text-blue-200">Telefoon</p>
                    <p className="mt-1 text-lg font-semibold text-white">+31 06 12 34 56 78</p>
                  </a>
                </div>

                <p className="mt-8 text-base text-gray-300">
                  Beschikbaar voor freelance opdrachten, stages en junior developer rollen.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

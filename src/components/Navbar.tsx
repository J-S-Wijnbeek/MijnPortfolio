export default function Navbar() {
  return (
    <nav className="w-full px-10 py-6 bg-black/80 backdrop-blur-sm flex items-center justify-between z-10">
      <a
        href="#home"
        className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text"
      >
        My Portfolio
      </a>

      <div className="flex items-center gap-8 text-lg font-medium">
        <a href="#home" className="bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">Home</a>
        <a href="#about" className="bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">Over Mij</a>
        <a href="#skills" className="bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">Skills</a>
        <a href="#softskills" className="bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">Soft Skills</a>
        <a href="#projects" className="bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">Projects</a>
        <a href="#contact" className="bg-gradient-to-r from-blue-400 via-white to-blue-400 text-transparent bg-clip-text">Contact</a>
      </div>
    </nav>
  );
}

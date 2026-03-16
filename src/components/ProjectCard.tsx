type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const ProjectCard = ({ title, description, imageUrl = '/project-placeholder.svg' }: ProjectCardProps) => {
  return (
    <article className="min-h-[420px] rounded-2xl border border-white/20 bg-white/5 p-7">
      <img
        src={imageUrl}
        alt={`${title} preview`}
        className="mb-6 h-52 w-full rounded-xl object-cover"
      />
      <h3 className="text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-base text-gray-300">{description}</p>
      <div className="mt-8 inline-block rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-100">
        Placeholder
      </div>
    </article>
  );
};

export default ProjectCard;


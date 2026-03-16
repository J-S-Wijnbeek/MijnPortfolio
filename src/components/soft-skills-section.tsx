const softSkills = [
  { name: 'Communication', level: 88 },
  { name: 'Teamwork', level: 92 },
  { name: 'Problem Solving', level: 86 },
  { name: 'Adaptability', level: 84 },
  { name: 'Time Management', level: 80 },
  { name: 'Creativity', level: 83 },
];

const softSkillGroups = [softSkills.slice(0, 3), softSkills.slice(3, 6)];

export default function SoftSkillsSection() {
  return (
    <section id="softskills" className="mx-auto w-full max-w-none">
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        {softSkillGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6"
          >
            <div className="space-y-8">
              {group.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-lg">
                    <span className="text-blue-100">{skill.name}</span>
                    <span className="text-blue-200">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/10">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-400 via-white to-blue-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

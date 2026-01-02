"use client";

interface TechTool {
  name: string;
  icon: string;
  category: string;
}

interface SkillsProps {
  techTools: TechTool[];
  showTechCategory: boolean;
  setShowTechCategory: (value: boolean) => void;
}

export default function Skills({
  techTools,
  showTechCategory,
  setShowTechCategory,
}: SkillsProps) {
  const categories = Array.from(new Set(techTools.map((t) => t.category)));

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-blue-950/30 via-purple-950/30 to-slate-950/30 border-y border-blue-500/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technologies & Tools
          </h2>
          <p className="text-slate-400 text-lg">
            Expertise across DevOps, Cloud, and Infrastructure Automation
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setShowTechCategory(false)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              !showTechCategory
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "border border-blue-500/30 text-slate-300"
            }`}
          >
            All Technologies
          </button>

          <button
            onClick={() => setShowTechCategory(true)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              showTechCategory
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "border border-blue-500/30 text-slate-300"
            }`}
          >
            By Category
          </button>
        </div>

        {/* ALL TECHNOLOGIES GRID */}
        {!showTechCategory && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techTools.map((tool, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 bg-blue-950/40 border border-blue-500/20 text-center"
              >
                <p className="font-semibold text-white">{tool.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* BY CATEGORY */}
        {showTechCategory && (
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">
                  {category}
                </h3>

                <div className="flex gap-4 overflow-x-auto pb-4">
                  {techTools
                    .filter((t) => t.category === category)
                    .map((tool, idx) => (
                      <div
                        key={idx}
                        className="min-w-[140px] rounded-lg p-4 bg-purple-950/40 border border-purple-500/20 text-center"
                      >
                        <p className="text-white text-sm font-semibold">
                          {tool.name}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

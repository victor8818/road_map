import React, { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, RefreshCcw, Search, Download, Upload } from "lucide-react";
import { motion } from "framer-motion";

// --- Data Model -------------------------------------------------------------
// You can freely edit this roadmap array. Each item renders as a card.
const ROADMAP = [
  {
    id: "m01-03",
    period: "Months 1–3",
    year: 1,
    title: "Stats + SQL Foundations",
    courses: [
      { name: "Statistics with Python (Univ. of Michigan)", url: "https://www.coursera.org/specializations/statistics-with-python" },
      { name: "SQL for Data Science (UC Davis)", url: "https://www.coursera.org/learn/sql-for-data-science" }
    ],
    project: "Analyze a public dataset (e.g., Adelaide housing/COVID) with Python & SQL.",
    deliverable: "GitHub notebook + README",
  },
  {
    id: "m04-06",
    period: "Months 4–6",
    year: 1,
    title: "Python for Data + BI",
    courses: [
      { name: "Data Analysis with Python (IBM)", url: "https://www.coursera.org/learn/data-analysis-with-python" },
      { name: "Excel to MySQL: Analytic Techniques (Duke)", url: "https://www.coursera.org/specializations/excel-mysql" }
    ],
    project: "Business KPI dashboard in Tableau or Power BI.",
    deliverable: "Shareable dashboard link",
  },
  {
    id: "m07-09",
    period: "Months 7–9",
    year: 1,
    title: "ML Intro + Math",
    courses: [
      { name: "Machine Learning Specialization (Andrew Ng)", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
      { name: "Mathematics for ML (Imperial)", url: "https://www.coursera.org/specializations/mathematics-machine-learning" }
    ],
    project: "Predict housing/rental prices (regression)",
    deliverable: "GitHub repo + LinkedIn post",
  },
  {
    id: "m10-12",
    period: "Months 10–12",
    year: 1,
    title: "Applied Data Science Capstone",
    courses: [
      { name: "Applied Data Science Capstone (IBM)", url: "https://www.coursera.org/learn/applied-data-science-capstone" }
    ],
    project: "End-to-end churn prediction case study",
    deliverable: "Capstone report + repo",
  },
  // Year 2
  {
    id: "m13-15",
    period: "Months 13–15",
    year: 2,
    title: "ML with Python + Eval",
    courses: [
      { name: "Machine Learning with Python (IBM)", url: "https://www.coursera.org/learn/machine-learning-with-python" },
      { name: "Mathematics for ML (continue)", url: "https://www.coursera.org/specializations/mathematics-machine-learning" }
    ],
    project: "Classification model (fraud or sentiment)",
    deliverable: "Kaggle notebook",
  },
  {
    id: "m16-18",
    period: "Months 16–18",
    year: 2,
    title: "Deep Learning Specialization",
    courses: [
      { name: "Deep Learning (Andrew Ng, DeepLearning.AI)", url: "https://www.coursera.org/specializations/deep-learning" }
    ],
    project: "Neural network for image recognition (MNIST/CIFAR)",
    deliverable: "PyTorch/TensorFlow repo",
  },
  {
    id: "m19-21",
    period: "Months 19–21",
    year: 2,
    title: "NLP Foundations",
    courses: [
      { name: "Natural Language Processing Specialization (DeepLearning.AI)", url: "https://www.coursera.org/specializations/natural-language-processing" }
    ],
    project: "Sentiment analysis on product reviews/social data",
    deliverable: "Report + code",
  },
  {
    id: "m22-24",
    period: "Months 22–24",
    year: 2,
    title: "MLOps for Production",
    courses: [
      { name: "ML Engineering for Production (MLOps)", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" }
    ],
    project: "Deploy churn model with Docker/Streamlit",
    deliverable: "Live demo link",
  },
  // Year 3
  {
    id: "m25-27",
    period: "Months 25–27",
    year: 3,
    title: "Advanced ML + Specialisation",
    courses: [
      { name: "Advanced Machine Learning (HSE Univ.)", url: "https://www.coursera.org/specializations/aml" }
    ],
    project: "Research-style prototype (RL, NLP, or CV)",
    deliverable: "Prototype + notes",
  },
  {
    id: "m28-30",
    period: "Months 28–30",
    year: 3,
    title: "Strategy + Publishing",
    courses: [
      { name: "AI For Everyone (Andrew Ng)", url: "https://www.coursera.org/learn/ai-for-everyone" }
    ],
    project: "Kaggle competition with write-up",
    deliverable: "Leaderboard + blog",
  },
  {
    id: "m31-33",
    period: "Months 31–33",
    year: 3,
    title: "Generative AI / LLMs",
    courses: [
      { name: "Generative AI with LLMs (DeepLearning.AI)", url: "https://www.coursera.org/learn/generative-ai-with-llms" }
    ],
    project: "Fine-tune a small transformer for finance/tax text",
    deliverable: "Repo + article",
  },
  {
    id: "m34-36",
    period: "Months 34–36",
    year: 3,
    title: "AI Research + PhD Prep",
    courses: [
      { name: "AI Research Specialization (Univ. of London)", url: "https://www.coursera.org/specializations/ai-research" }
    ],
    project: "Full research project + SoP + referees",
    deliverable: "arXiv preprint + applications",
  },
];

// --- Utilities --------------------------------------------------------------
const STORAGE_KEY = "coursera_roadmap_progress_v1";

function usePersistentProgress() {
  const [done, setDone] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done]);

  const reset = () => setDone({});

  return { done, setDone, reset };
}

// --- Components -------------------------------------------------------------
const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
    <div
      className="h-full rounded-full bg-black"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

const Card = ({ item, checked, onToggle }: any) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition border border-gray-100"
  >
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-xs uppercase tracking-wide text-gray-500">{item.period} · Year {item.year}</div>
        <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
      </div>
      <button
        onClick={onToggle}
        className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
        title={checked ? "Mark as not done" : "Mark as done"}
      >
        {checked ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
      </button>
    </div>

    <div className="mt-4 grid md:grid-cols-2 gap-4">
      <div>
        <div className="text-sm font-medium mb-1">Courses</div>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {item.courses.map((c: any, i: number) => (
            <li key={i}>
              <a href={c.url} target="_blank" rel="noreferrer" className="underline hover:no-underline">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-sm font-medium mb-1">Project</div>
        <p className="text-sm text-gray-700">{item.project}</p>
        <div className="text-sm font-medium mt-3 mb-1">Deliverable</div>
        <p className="text-sm text-gray-700">{item.deliverable}</p>
      </div>
    </div>
  </motion.div>
);

export default function CourseraRoadmapTracker() {
  const { done, setDone, reset } = usePersistentProgress();
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    return ROADMAP.filter((r) => {
      const matchesYear = yearFilter === "all" ? true : r.year === yearFilter;
      const q = query.trim().toLowerCase();
      const matchesQuery = !q
        ? true
        : [r.title, r.period, r.project, r.deliverable, ...r.courses.map((c) => c.name)]
            .join(" ")
            .toLowerCase()
            .includes(q);
      return matchesYear && matchesQuery;
    });
  }, [query, yearFilter]);

  const total = ROADMAP.length;
  const completed = Object.values(done).filter(Boolean).length;
  const progress = Math.round((completed / total) * 100);

  const toggle = (id: string) => setDone((d: any) => ({ ...d, [id]: !d[id] }));

  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(done, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "roadmap_progress.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importProgress = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        setDone(parsed);
      } catch (e) {
        alert("Invalid progress file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Coursera Roadmap Tracker</h1>
          <p className="text-gray-600 mt-2">
            Track your 3-year journey from Data Analyst → Data Scientist → AI Researcher (PhD-ready).
          </p>
        </header>

        <section className="mb-6 p-5 bg-white rounded-2xl shadow border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div className="w-full md:w-2/3 flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Search course, project, deliverable…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <select
                className="border border-gray-200 rounded-xl px-3 py-2"
                value={String(yearFilter)}
                onChange={(e) => setYearFilter(e.target.value === "all" ? "all" : Number(e.target.value))}
              >
                <option value="all">All years</option>
                <option value="1">Year 1</option>
                <option value="2">Year 2</option>
                <option value="3">Year 3</option>
              </select>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:bg-gray-50"
                title="Reset progress"
              >
                <RefreshCcw className="w-4 h-4" /> Reset
              </button>
              <button
                onClick={exportProgress}
                className="inline-flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:bg-gray-50"
                title="Export progress"
              >
                <Download className="w-4 h-4" /> Export
              </button>
              <label className="inline-flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:bg-gray-50 cursor-pointer" title="Import progress">
                <Upload className="w-4 h-4" /> Import
                <input type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files && importProgress(e.target.files[0])} />
              </label>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
              <span>Progress: {completed}/{total} items</span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} />
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((item) => (
            <Card
              key={item.id}
              item={item}
              checked={!!done[item.id]}
              onToggle={() => toggle(item.id)}
            />)
          )}
        </div>

        <footer className="text-center text-xs text-gray-500 mt-10">
          <p>
            Tip: click the circle on each card to mark it complete. Your progress is stored locally in your browser.
          </p>
        </footer>
      </div>
    </div>
  );
}

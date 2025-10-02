/* eslint-disable */
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
}

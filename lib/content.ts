import { basePath } from "@/lib/basePath";

export const profile = {
  name: "Anthony Pollock",
  title: "Statistical Programmer · R and SAS",
  location: "Pinson, Alabama",
  email: "anthony.d.pollock@outlook.com",
  phone: "+1 (470) 866-4099",
  github: "https://github.com/anthonypollock",
  linkedin: "https://www.linkedin.com/in/anthony-pollock-1611a389/",
  greeting: "Hello, I’m Anthony Pollock",
  intro:
    "I program healthcare and study data in R and SAS, from source data through analysis-ready and SDTM-aligned datasets, with the checks that make a delivery trustworthy. I have about ten years of data programming, including more than five years in clinical and regulated healthcare work.",
};

export const socials = [
  { icon: "github", label: "GitHub", href: profile.github },
  { icon: "linkedin", label: "LinkedIn", href: profile.linkedin },
  { icon: "mail", label: `Email ${profile.name}`, href: `mailto:${profile.email}` },
] as const;

export const figures = [
  { value: "10+", label: "years programming" },
  { value: "5+", label: "years clinical" },
  { value: "4", label: "selected works" },
];

export const skills = [
  {
    icon: "file-code",
    title: "R and SAS",
    pills: [
      "DATA step",
      "PROC SQL",
      "Macros",
      "Reproducible R environments",
      "R package validation",
    ],
  },
  {
    icon: "clipboard-check",
    title: "Statistical programming",
    pills: [
      "Analysis-ready extracts",
      "Reconciliation listings",
      "Protocol checks",
      "SDTM-aligned tabulation",
      "Pinnacle 21",
    ],
  },
  {
    icon: "database",
    title: "Healthcare data",
    pills: [
      "CDISC",
      "SDTM",
      "EDC",
      "eCOA",
      "eConsent",
      "Data clarification forms",
      "Site, subject, visit",
      "Form, query, audit history",
    ],
  },
  {
    icon: "chart-column",
    title: "Visualization",
    pills: [
      "Power BI",
      "Tableau",
      "QuickSight",
      "SSRS",
      "Parameterized filters",
      "Scheduled refresh",
      "Drilldown",
      "Record-level review",
    ],
  },
  {
    icon: "app-window",
    title: "Also",
    body: "Programming and application development came first, including healthcare sites in Python.",
    pills: [
      "Django",
      "FastAPI",
      "SQL",
      "REST and SOAP",
      "JSON, XML, and CSV",
      "AWS",
      "Amazon S3",
      "Azure Data Factory",
    ],
  },
] as const;

export const projectsIntro =
  "Study data, transfers, and healthcare reporting.";

export const work = [
  {
    slug: "study-data",
    icon: "table",
    image: `${basePath}/projects/study-data.jpg`,
    title: "Study data, ready to analyze",
    summary: "Direct data capture and eCOA programmed into analysis-ready extracts.",
    pills: ["eCOA", "SAS", "Macros", "Reconciliation listings", "Protocol checks", "SDTM"],
    paragraphs: [
      "Direct data capture and eCOA programmed into analysis-ready extracts. SAS programs and reusable macros for reconciliation listings, protocol checks, and SDTM-aligned tabulation.",
      "Independent review of programs, mappings, and source-to-target totals before release.",
    ],
  },
  {
    slug: "reusable-standard",
    icon: "layers",
    image: `${basePath}/projects/reusable-standard.jpg`,
    title: "A standard others could reuse",
    summary:
      "Twenty-two mapping, validation, QC, and transfer components standardized across eight study programs.",
    pills: ["Mapping", "Validation", "QC", "Transfers", "SQL"],
    paragraphs: [
      "Twenty-two mapping, validation, QC, and transfer components standardized across eight study programs.",
      "Troubleshooting guides and mentoring on SQL, QC, and handoff.",
    ],
  },
  {
    slug: "transfers",
    icon: "arrow-right-left",
    image: `${basePath}/projects/transfers.jpg`,
    title: "Transfers that hold up",
    summary:
      "Mappings, checks, and scheduled delivery for participant, assessment, device, telehealth, laboratory, and vendor data.",
    pills: ["Python", "R", "SFTP", "Web services", "Schema checks"],
    paragraphs: [
      "Mappings and acceptance rules for participant, assessment, device, telehealth, laboratory, and vendor data. A study data model, Python checks for schema and metadata, and scheduled delivery by SFTP and web services.",
      "Locked Python and R environments, expected-output comparisons, and traceable test evidence.",
    ],
  },
  {
    slug: "healthcare-views",
    icon: "layout-dashboard",
    image: `${basePath}/projects/healthcare-views.jpg`,
    title: "Healthcare views people can investigate",
    summary:
      "Power BI reports and healthcare sites with a path from the summary down to the record.",
    pills: ["Power BI", "Django", "FastAPI", "Drilldown"],
    paragraphs: [
      "Power BI and related reports for study status, completeness, query aging, and assessment compliance, with filters and a path down to the record. Healthcare sites in Django and FastAPI that present that kind of analysis.",
      "The same habit in earlier operational reporting: finding missing, duplicate, late, and inconsistent records, then leaving a dictionary, a test note, and a correction path.",
    ],
  },
] as const;

export const experienceIntro =
  "The path began in programming and application development, including healthcare sites in Python, then moved into clinical and statistical programming.";

export const experience = [
  {
    dates: "2022–present",
    title: "Senior programming for clinical study data",
    place: "Remote",
    body: "Integrations, SDTM-aligned outputs, QC, and transfers.",
    pills: ["Integrations", "SDTM", "QC", "Transfers"],
  },
  {
    dates: "2018–2022",
    title: "Database programming and technical analysis",
    body: "Mappings, automated transfers, SAS and SQL extracts, Power BI, and reviewed recurring deliverables.",
    pills: ["Mappings", "SAS", "SQL", "Power BI"],
  },
  {
    dates: "2016–2018",
    title: "Data analysis and operational reporting",
    body: "Scheduled imports, validation queries, dictionaries, and controlled release notes.",
    pills: ["Scheduled imports", "Validation queries", "Dictionaries", "Release notes"],
  },
];

export const education = {
  degree: "B.S., Computer Information Systems",
  school: "Florida Institute of Technology",
  years: "2014–2017",
};

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}

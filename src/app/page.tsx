"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const bootLogs = [
  "$ initializing devops platform...",
  "$ connecting to kubernetes cluster...",
  "✔ cluster: prod-us-central1",
  "$ loading observability stack...",
  "✔ prometheus | grafana | loki | datadog",
  "$ verifying ci/cd pipelines...",
  "✔ github-actions | argocd | terraform | jenkins",
  "$ scanning infrastructure...",
  "✔ all 150+ resources healthy",
  "$ running security compliance...",
  "✔ 100% policy compliant",
  "✔ system ready - welcome DevOps engineer",
  "root@prathamesh:~# ",
];

const techTools = [
  { name: "Kubernetes", icon: "k8s", category: "Orchestration" },
  { name: "Docker", icon: "docker", category: "Containers" },
  { name: "Terraform", icon: "terraform", category: "IaC" },
  { name: "GitHub Actions", icon: "github", category: "CI/CD" },
  { name: "GitLab CI", icon: "gitlab", category: "CI/CD" },
  { name: "Helm", icon: "helm", category: "Orchestration" },
  { name: "Kustomize", icon: "kustomize", category: "Orchestration" },
  { name: "Skaffold", icon: "skaffold", category: "Development" },
  { name: "Prometheus", icon: "prometheus", category: "Monitoring" },
  { name: "Grafana", icon: "grafana", category: "Monitoring" },
  { name: "AWS", icon: "aws", category: "Cloud" },
  { name: "GCP", icon: "gcp", category: "Cloud" },
  { name: "Azure", icon: "azure", category: "Cloud" },
  { name: "Jenkins", icon: "jenkins", category: "CI/CD" },
  { name: "ArgoCD", icon: "argocd", category: "GitOps" },
  { name: "Cloud Logging", icon: "logging", category: "Monitoring" },
  { name: "SonarQube", icon: "sonarqube", category: "Security" },
  { name: "Python", icon: "python", category: "Programming" },
  { name: "Go", icon: "go", category: "Programming" },
  { name: "Bash", icon: "bash", category: "Scripting" },
];

const projectsData = [
  {
    title: "Cloud-Resource-Logger",
    description:
      "AWS CLI tool for efficient cloud resource management. Built with Node.js and AWS SDK v3, enabling streamlined management of EC2, S3, Lambda, DynamoDB, IAM, RDS, ECS, and EKS resources across AWS infrastructure.",
    impact: "CLI automation",
    technologies: ["Node.js", "AWS SDK v3", "AWS CLI", "EC2", "S3", "Lambda"],
    highlights: ["Multi-service management", "AWS automation", "Resource tracking"],
    github: "https://github.com/imInde09/Cloud-Resource-Logger",
  },
  {
    title: "Admin Portal",
    description:
      "eStore admin dashboard built with Angular and modern AWS services including S3, Route 53, Lambda, and API Gateway. Features comprehensive admin capabilities with responsive UI and Material Design components.",
    impact: "Admin dashboard",
    technologies: ["Angular", "AWS S3", "Route 53", "Lambda", "API Gateway"],
    highlights: ["Material Design", "AWS integration", "Responsive UI"],
    github: "https://github.com/imInde09/Admin-Portal",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap. Showcases projects, skills, and professional experience with a modern responsive design.",
    impact: "Web design",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    highlights: ["Responsive design", "Modern UI", "Portfolio showcase"],
    github: "https://github.com/imInde09/Portfolio-Website",
  },
];

const certifications = [
  {
    title: "Snowflake SnowPro Core",
    issuer: "Snowflake",
    year: "2024",
    expiresIn: "2026",
    color: "from-blue-500 to-cyan-500",
    url: "https://verify.snowflakeu.com",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    expiresIn: "2027",
    color: "from-orange-500 to-yellow-500",
    url: "https://www.credly.com/badges/your-aws-badge-id",
  },
  {
    title: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2023",
    expiresIn: "2026",
    color: "from-red-500 to-orange-500",
    url: "https://www.credential.net/your-google-cloud-badge",
  },
  {
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    year: "2023",
    expiresIn: "2025",
    color: "from-red-600 to-red-500",
    url: "https://www.credly.com/badges/your-oracle-badge-id",
  },
  {
    title: "Oracle Cloud Infrastructure AI Certified Foundations Associate",
    issuer: "Oracle",
    year: "2023",
    expiresIn: "2025",
    color: "from-yellow-500 to-orange-500",
    url: "https://www.credly.com/badges/your-oracle-ai-badge-id",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "2024",
    color: "from-blue-600 to-blue-400",
    url: "https://learn.microsoft.com/en-us/users/prathameshomprakashinde-9834/credentials/b415794285445557",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    year: "2024",
    expiresIn: "2027",
    color: "from-gray-700 to-gray-900",
    url: "https://www.credly.com/badges/your-github-badge-id",
  },
];

const experiences = [
  {
    title: "Framework Engineer – Platform",
    company: "Quantiphi",
    period: "01/2024 – Present",
    highlights: [
      "Designed and implemented scalable CI/CD pipelines using GitHub Actions and GitLab CI with zero-downtime deployments",
      "Automated multi-cloud infrastructure provisioning using Terraform, Kubernetes, and reusable IaC modules",
      "Developed containerized microservices using Docker, Helm, Kustomize, and Skaffold for consistent deployments",
      "Deployed and optimized workloads on GKE with autoscaling, namespace isolation, and service mesh integration",
      "Implemented comprehensive observability using Prometheus, Grafana, Cloud Monitoring, and Cloud Logging",
      "Led cloud automation across GCP and AWS using Cloud Functions, Lambda, API Gateway, and Cognito",
      "Strengthened security with SonarQube, Nessus vulnerability scans, and least-privilege IAM access",
    ],
  },
  {
    title: "Platform Engineer Intern",
    company: "Quantiphi",
    period: "03/2023 – 12/2023",
    highlights: [
      "Supported CI/CD workflow enhancements for cloud deployments across AWS and GCP",
      "Optimized build pipelines and container lifecycle management",
      "Built internal automation scripts using Python and Node.js for infrastructure validation",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Advaa Health",
    period: "03/2022 – 03/2023",
    highlights: [
      "Developed modern front-end web applications using Angular, TypeScript, and RESTful APIs",
      "Integrated automated testing with Jasmine/Karma and CI/CD workflows for frontend releases",
      "Improved code quality and reduced regression defects through comprehensive testing",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Cancard Inc.",
    period: "03/2022 – 03/2023",
    highlights: [
      "Deployed serverless architectures with AWS Lambda, API Gateway, and DynamoDB",
      "Automated infrastructure scaling and monitoring with CloudWatch and Auto Scaling Groups",
      "Configured VPC for production-grade reliability and security",
    ],
  },
  {
    title: "UI/UX Designer & Front-End Developer",
    company: "Ambitech Healthcare",
    period: "09/2021 – 03/2022",
    highlights: [
      "Developed front-end design using HTML, CSS, JavaScript, and Bootstrap for Admin Panel Dashboard",
      "Designed user interfaces for Android applications using Figma",
    ],
  },
];

export default function Home() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [showHero, setShowHero] = useState(false);
  const [showTechCategory, setShowTechCategory] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleLogs((prev) => [...prev, bootLogs[index]]);
      index++;

      if (index === bootLogs.length) {
        clearInterval(interval);
        setTimeout(() => setShowHero(true), 600);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* ANIMATED GRID BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
      </div>

      <Header />
      <Hero visibleLogs={visibleLogs} showHero={showHero} />
      <Skills techTools={techTools} showTechCategory={showTechCategory} setShowTechCategory={setShowTechCategory} />
      <Projects projectsData={projectsData} />
      <Certifications certifications={certifications} />
      <Experience experiences={experiences} />
      <Contact />
      <Footer />
    </div>
  );
}


"use client";

import { useEffect, useState } from "react";
import ProjectsList from "@/components/ProjectsList";
import SkeletonLoader from "@/components/SkeletonLoader";

interface Project {
  name: string;
  description: string;
  category: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data.loopOutput.projectIdeas);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Projects Ideas
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Find inspiration for your next projects. Filter by category to see
          specific ideas.
        </p>
        {isLoading ? <SkeletonLoader /> : <ProjectsList projects={projects} />}
      </div>
    </div>
  );
}

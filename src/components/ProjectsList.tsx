import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import CategoryFilter from "./CategoryFilter";

interface Project {
  name: string;
  description: string;
  category: string;
}

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  useEffect(() => {
    setFilteredProjects(
      selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : projects
    );
  }, [selectedCategory, projects]);

  return (
    <div className="space-y-8">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;

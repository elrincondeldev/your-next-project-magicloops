import React from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  category,
}) => {
  return (
    <div className="bg-gradient-to-br cursor-pointer from-white to-gray-50 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <span className="text-xs font-semibold tracking-wide text-white bg-blue-500 px-2 py-1 rounded-md">
        {category.toUpperCase()}
      </span>
    </div>
  );
};

export default ProjectCard;

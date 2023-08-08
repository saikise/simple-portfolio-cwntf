import ProjectRow from "../../components/ProjectRow";
import { WEB_PROJECTS } from "../../constants/data";
import { WEB_ICON } from "../../constants/icons";

export default async function Page() {
  const title = "Web Projects";
  const description = "My web projects mostly created with React.";
  const projects = WEB_PROJECTS;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="group flex items-center text-base font-medium text-gray-900 dark:text-white">
          {WEB_ICON}
          <span className="ml-4">{title}</span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>

      {!projects.length && (
        <p className="text-sm text-gray-700 dark:text-gray-400">
          No projects under {title} yet
        </p>
      )}

      {!!projects.length && (
        <ul className="max-w-2xl [&>*]:mt-2">
          {projects.map((project) => (
            <li key={`project-row-${project.id}`}>
              <ProjectRow {...project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import {
  DESKTOP_PROJECTS,
  MOBILE_PROJECTS,
  PINNED,
  WEB_PROJECTS,
} from "../constants/data";

export default async function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex max-w-xl flex-col gap-2">
        <h4 className="text-2xl font-bold text-white">
          Demo of simple-portfolio-cwntf
        </h4>
        <i className="text-sm font-normal text-gray-700 dark:text-gray-400">
          Quick project. No backend needed.
          <br />
          <b>Stack:</b> Next, Tailwind, Flowbite.
          <br />
          <b>Tags:</b> Full-stack dev, Next.js 13 app router.
        </i>
      </div>
      {!!PINNED.length && (
        <div className="mt-2 flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div>
              <h5 className="text-xl font-bold text-white">Pinned</h5>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Top projects that I want to highlight.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
            {PINNED.slice(0, 4).map((project) => (
              <div key={`update-project-card-${project.id}`} className="w-full">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      )}
      {!!WEB_PROJECTS.length && (
        <div className="mt-2 flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div>
              <h5 className="text-xl font-bold text-white">Web Projects</h5>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                My web projects mostly created with React.
              </p>
            </div>
            <Link href={"/web-projects"}>
              <p className="text-sm text-white hover:underline">Show all</p>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
            {WEB_PROJECTS.slice(0, 4).map((project) => (
              <div key={`update-project-card-${project.id}`} className="w-full">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      )}
      {!!MOBILE_PROJECTS.length && (
        <div className="mt-2 flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div>
              <h5 className="text-xl font-bold text-white">Mobile Projects</h5>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                My mobile projects mostly created with React Native.
              </p>
            </div>
            <Link href={"/mobile-projects"}>
              <p className="text-sm text-white hover:underline">Show all</p>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
            {MOBILE_PROJECTS.slice(0, 4).map((project) => (
              <div key={`update-project-card-${project.id}`} className="w-full">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      )}
      {!!DESKTOP_PROJECTS.length && (
        <div className="mt-2 flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <div>
              <h5 className="text-xl font-bold text-white">Desktop Projects</h5>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                My desktop projects mostly created with Electron.
              </p>
            </div>
            <Link href={"/desktop-projects"}>
              <p className="text-sm text-white hover:underline">Show all</p>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
            {DESKTOP_PROJECTS.slice(0, 4).map((project) => (
              <div key={`update-project-card-${project.id}`} className="w-full">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

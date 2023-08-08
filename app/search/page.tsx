import ProjectRow from "../../components/ProjectRow";
import SearchBar from "../../components/SearchBar";
import SearchButtonGroup from "../../components/SearchButtonGroup";
import TopSearches from "../../components/TopSearches";
import { SERIES } from "../../constants/data";
import { PageProps } from "../../lib/server.types";
import { projects } from "../../projects";

export default async function Page({ searchParams }: PageProps) {
  const keyword = searchParams.q?.toString();
  const seriesCode = searchParams.t?.toString() || "all";
  const series = SERIES.find((s) => s.code === seriesCode);

  const projectsFiltered = projects.filter((project) => {
    const keywordMatch =
      !keyword ||
      project.title.toLowerCase().includes(keyword.toLowerCase()) ||
      project.description.toLowerCase().includes(keyword.toLowerCase());
    const typeMatch =
      seriesCode === "all" || project.series.code === seriesCode;
    return keywordMatch && typeMatch;
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-fit flex-col gap-2">
        <SearchBar />
        <SearchButtonGroup keyword={keyword || ""} seriesCode={seriesCode} />
      </div>
      {!searchParams.q && <TopSearches />}
      {!!searchParams.q && !!projectsFiltered.length && (
        <ul className="max-w-2xl [&>*]:mt-2">
          {projectsFiltered.map((project) => (
            <li key={`search-project-row-${project.id}`}>
              <ProjectRow {...project} />
            </li>
          ))}
        </ul>
      )}
      {!!searchParams.q && !projectsFiltered.length && (
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {`No results found in titles and descriptions for keyword ${keyword}`}
          {!!series?.title && ` and category ${series.title}`}
        </p>
      )}
    </div>
  );
}

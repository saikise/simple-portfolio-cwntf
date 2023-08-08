import {
  DESKTOP_ICON,
  GITHUB_ICON,
  HOME_ICON,
  MEDIUM_ICON,
  MOBILE_ICON,
  SEARCH_ICON,
  WEB_ICON,
  YOUTUBE_ICON,
} from "../constants/icons";
import SidebarItem from "./SidebarItem";
import SidebarToggleClose from "./SidebarToggleClose";
import Socials from "./Socials";

// Your social platforms. Where people can find you.
const socials = [
  {
    key: "socialsMedium",
    url: "https://medium.com/@saikise",
    svg: MEDIUM_ICON,
  },
  {
    key: "socialsGitHub",
    url: "https://github.com/saikise",
    svg: GITHUB_ICON,
  },
  {
    key: "socialsYouTube",
    url: "https://youtube.com/@saikise",
    svg: YOUTUBE_ICON,
  },
];

export default async function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="h-full overflow-y-auto bg-white px-3 py-5 dark:bg-gray-800">
        <ul className="space-y-2">
          <li key="sidebarToggleClose" className="flex h-fit justify-end">
            <SidebarToggleClose />
          </li>
          <li key="sidebarItemHome">
            <SidebarItem title="Home" url="/" svg={HOME_ICON} />
          </li>
          <li key="sidebarItemSearch">
            <SidebarItem title="Search" url={"/search"} svg={SEARCH_ICON} />
          </li>
        </ul>
        <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
          <li key="sidebarItemWebProjects">
            <SidebarItem
              title="Web Projects"
              url={"/web-projects"}
              svg={WEB_ICON}
            />
          </li>
          <li key="sidebarItemMobileProjects">
            <SidebarItem
              title="Mobile Projects"
              url={"/mobile-projects"}
              svg={MOBILE_ICON}
            />
          </li>
          <li key="sidebarItemDesktopProjects">
            <SidebarItem
              title="Desktop Projects"
              url={"/desktop-projects"}
              svg={DESKTOP_ICON}
            />
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 z-20 w-full space-x-4 bg-white px-4 pb-4 dark:bg-gray-800 lg:flex">
          <div className="flex w-full flex-nowrap justify-center gap-2">
            <span className="flex flex-nowrap items-center justify-center whitespace-nowrap text-sm text-gray-900 dark:text-white">
              Socials
            </span>
            <span className="flex flex-nowrap items-center justify-center whitespace-nowrap text-sm text-gray-900 dark:text-white">
              •
            </span>
            <Socials socials={socials} />
          </div>
        </div>
      </div>
    </aside>
  );
}

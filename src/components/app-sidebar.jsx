import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
} from "./ui/sidebar";

// This is sample data.
const data = {
  user: {
    // name: "shadcn",
    // email: "m@example.com",
    // avatar: "/avaOtars/shadcn.jpg",
  },

  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "About Us",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Our Mission",
          url: "#our-mission",
        },
        {
          title: "Why Choose Us",
          url: "#why-us",
        },
      ],
    },
    {
      title: "Our Services",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Placeholder",
          url: "#",
        },
        {
          title: "Placeholder2",
          url: "#",
        },
        {
          title: "Placeholder3",
          url: "#",
        },
      ],
    },
    {
      title: "Contact Us",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Placeholder4",
          url: "#",
        },
        {
          title: "Placeholder5",
          url: "#",
        },
        {
          title: "Placeholder6",
          url: "#",
        },
        {
          title: "Placeholder7",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <SidebarProvider>
      <Sidebar {...props}>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}

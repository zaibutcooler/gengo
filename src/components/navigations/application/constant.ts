import {
  AreaChart,
  Bot,
  Calculator,
  DraftingCompass,
  Settings,
  Sofa,
} from "lucide-react";
import { BiSolidDetail, BiSolidEdit } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";

export const sidebarLinks = [
  {
    label: "Dashboard",
    icon: RiDashboardLine,
    route: "/dashboard",
    beta: false,
    color: "text-blue-300",
  },

  {
    label: "Property Description",
    icon: BiSolidDetail,
    route: "/property-description",
    beta: false,
    color: "text-blue-300",
  },

  {
    label: "Marketing Contents",
    icon: BiSolidEdit,
    route: "/contents",
    beta: false,
    color: "text-blue-300",
  },

  {
    label: "Ai Assistant",
    icon: Bot,
    route: "/chat",
    beta: false,
    color: "text-blue-300",
  },

  {
    label: "Calculations",
    icon: Calculator, // this one
    route: "/calculations",
    beta: false,
    color: "text-blue-300",
  },

  {
    label: "Market Analysis",
    icon: AreaChart, // this one
    route: "/market-analysis",
    beta: false,
    color: "text-blue-300",
  },
  {
    label: "Virtual Staging",
    icon: Sofa, // this one
    route: "/virtual-staging",
    beta: true,
    color: "text-blue-300",
  },
  {
    label: "Floor Plans",
    icon: DraftingCompass,
    route: "/redraw",
    beta: true,
    color: "text-blue-300",
  },

  // {
  //   label: "Lead Generator",
  //   icon: UserPlus, // this one
  //   route: "/leadgen",
  //   beta: true,
  //   color: "text-blue-300",
  // },

  // {
  //   label: "Additional Tools",
  //   icon: PlusSquare, // this one
  //   route: "/additionals",
  //   beta: false,
  //   color: "text-blue-300",
  // },
];

export interface LinkType {
  label: string;
  icon: any;
  route: string;
}

export const settingLink = {
  label: "Setting",
  icon: Settings,
  route: "/settings",
  beta: false,
  color: "text-blue-300",
};

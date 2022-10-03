import { FaChartBar, FaEllipsisH, FaTrash } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { MdViewModule } from "react-icons/md";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <FaChartBar />,
      },
    ],
  },
  {
    title: "Templates",
    links: [
      {
        name: "phishing",
        icon: <HiTemplate />,
      },
      {
        name: "training",
        icon: <MdViewModule />,
      },
    ],
  },
];

export const controls = [
  {
    title: "action",
    icon: <FaEllipsisH />,
    options: [
      {
        name: "Action 1",
        icon: "",
      },
      {
        name: "Action 2",
        icon: "",
      },
      {
        name: "Action 3",
        icon: "",
      },
      {
        name: "Action 4",
        icon: "",
      },
    ],
  },
  {
    title: "delete",
    icon: <FaTrash />,
    options: [
      {
        name: "Delete 1",
        icon: "",
      },
      {
        name: "Delete 2",
        icon: "",
      },
    ],
  },
];

export const entries = [
  { count: 20 },
  { count: 50 },
  { count: 100 },
  { count: 500 },
  { count: 1000 },
];

export const items = [
  {
    title: "Title 1",
    difficulty: "Advance",
    category: "Category",
    date: "9/21/2021",
  },
  {
    title: "Title 2",
    difficulty: "Advance",
    category: "Category",
    date: "9/21/2021",
  },
  {
    title: "Title 3",
    difficulty: "Beginner",
    category: "Category",
    date: "9/21/2021",
  },
  {
    title: "Title 4",
    difficulty: "Intermediate",
    category: "Category",
    date: "9/21/2021",
  },
  {
    title: "Title 5",
    difficulty: "Beginner",
    category: "Category",
    date: "9/21/2021",
  },
];

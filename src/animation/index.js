export const sidebarAnimation = {
  hidden: {
    opacity: 0,
    x: -200,
    width: 0,
    transition: { duration: 0.35 },
  },
  visible: {
    opacity: 1,
    x: 0,
    width: "288px",
    transition: { damping: 25, delay: 0.1 },
  },
};

export const dropDownMenu = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { stiffness: 500, velocity: -100 },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const dropDownItems = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

export const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export const caretAnimation = {
  collapse: { rotate: 180 },
  closed: { rotate: 0 },
};

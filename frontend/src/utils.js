// Function to use stately variables to update things that have changes based onsmall medium and alrge window sizes
export const selectTSML = (width, tiny, sml, med, lrg) => {
  return width < process.env.REACT_APP_BREAKPOINT_T
    ? tiny
    : width < process.env.REACT_APP_BREAKPOINT_S
    ? sml
    : width < process.env.REACT_APP_BREAKPOINT_L
    ? med
    : lrg;
};

export const handleToggleModal = (setModalVisFunction) => {
  const hide = { o: "0", v: "hidden" };
  const show = { o: "1", v: "visible" };
  // eslint-disable-next-line
  setModalVisFunction((prevState) => (prevState.o == "0" ? show : hide));
};

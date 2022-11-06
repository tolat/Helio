// Function to use stately variables to update things that have changes based onsmall medium and alrge window sizes
export const selectSML = (width, sml, med, lrg) => {
  return width < process.env.REACT_APP_BREAKPOINT_S
    ? sml
    : width > process.env.REACT_APP_BREAKPOINT_L
    ? lrg
    : med;
};

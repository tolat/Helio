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

export const sendMessage = (
  msgObject,
  path,
  successFunction,
  failureFunction
) => {
  fetch(`${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(msgObject),
    //credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      responseData.success
        ? successFunction()
        : failureFunction(responseData.error);
    });
};

export const showFlash = (id, header, message, color) => {
  document.getElementById(`${id}_flashContainer`).style.backgroundColor = color;
  document.getElementById(`${id}_header`).innerText = header;
  document.getElementById(`${id}_message`).innerText = message;
  document.getElementById(`${id}_masterContainer`).style.marginTop = "2rem";
};

export const closeFlash = (id) => {
  document.getElementById(`${id}_masterContainer`).style.marginTop = "-10rem";
};

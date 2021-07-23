export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userevent) => {
      setTimeout(() => {
        html.addEventListener(userevent, handleoutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
  function handleoutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userevent) => {
        html.removeEventListener(userevent, handleoutsideClick);
      });
      callback();
    }
  }
}

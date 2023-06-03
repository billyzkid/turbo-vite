export function setupCounter(element: HTMLButtonElement) {
  let count = 0;

  const setCount = (value: number) => {
    count = value;
    element.innerText = `count is ${count}`;
  };

  element.addEventListener("click", () => setCount(count + 1));
  setCount(0);
}

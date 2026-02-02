window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Minimum loader time (milliseconds)
  const MIN_LOAD_TIME = 2000; // 2 seconds

  const startTime = performance.now();

  function hideLoader() {
    const elapsed = performance.now() - startTime;
    const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsed);

    setTimeout(() => {
      loader.classList.add("fade-out");

      // Wait for fade animation to finish
      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
      }, 500); // must match CSS transition time
    }, remainingTime);
  }

  hideLoader();
});

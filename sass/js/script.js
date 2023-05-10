AOS.init({
    duration: 3000,
    once: true,
  });
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.classList.add("loading-none");
  }, 3000);

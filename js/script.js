function highlightCurrent() {
    const curPage = document.URL;
    console.log(curPage);
    const links = document.getElementsByTagName('a');
    console.log(links);
    for (let link of links) {
      if (link.href == curPage) {
        link.classList.add("current-link");
      }
    }
  }

  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      highlightCurrent()
    }
  };
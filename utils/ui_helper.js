const createContainer = (children = [], containerClasses = []) => {
  const div = document.createElement('div');

  if (containerClasses.length > 0) {
    div.classList.add(...containerClasses);
  }

  console.log(children);
  div.append(...children);

  return div;
};

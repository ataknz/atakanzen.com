const capitalize = (str) => {
  const string = String(str);
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const extractCategories = (categories) => {
  return String(categories).split(",").map(category => capitalize(category))
}

export { capitalize, extractCategories };

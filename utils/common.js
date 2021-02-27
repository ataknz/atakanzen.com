const capitalize = (str) => {
  const string = String(str);
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { capitalize };

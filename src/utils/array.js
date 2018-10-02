export const partition = (prop, array) =>
  array.reduce(
    (acc, item) => ({
      ...acc,
      [item[prop]]: (acc[item[prop]] || []).concat(item),
    }),
    {}
  );

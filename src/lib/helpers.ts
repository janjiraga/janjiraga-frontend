// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanitizeQuery = (query: any) => {
  for (const key in query) {
    if (!query[key]) {
      delete query[key];
    }
  }
  return query;
};

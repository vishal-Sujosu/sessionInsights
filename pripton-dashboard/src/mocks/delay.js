export const simulateAsync = (data, ms = 600) => {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
};

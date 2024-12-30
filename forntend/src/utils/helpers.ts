export const formatNumber = (n: number, acceptNegative = false) => {
  if (!n) n = 0;

  if (Number.isNaN(n)) return n;

  if (!acceptNegative) n = Math.abs(n);
  return Number(n).toLocaleString('fa-ir');
};

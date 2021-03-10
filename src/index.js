const towelSort = (matrix) => (matrix || []).map((row , index) => (index + 1) % 2 === 0 ? row.reverse() : row).flat();

module.exports = towelSort;

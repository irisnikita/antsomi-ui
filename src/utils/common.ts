/**
 * Function to reorder list
 * @param {Object[]} list - list of item want to reorder
 * @param {number} startIndex - start item index want to replace position: ;
 * @param {number} endIndex - end item index want to replace position: ;
 * @returns {object[]}
 */
export const reorder = (
  list: Array<Record<string, unknown> | string | number>,
  startIndex: number,
  endIndex: number,
): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};

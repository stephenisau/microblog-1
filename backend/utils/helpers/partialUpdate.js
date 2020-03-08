
/**
 * 
 * @param {String} table 
 * @param {Array[Object]} items 
 * @param {String} key 
 * @param {Number} id 
 */

const partialUpdateQuery = (table, items, key, id) => {
  let idx = 1;
  let columns = [];

  // filter out keys that start with "_" -- we don't want these in DB
  for (let key in items) {
    if (key.startsWith("_")) {
      delete items[key]
    }
  }

  for (let column in items) {
    columns.push(`${column}=$${idx}`);
    idx += 1;
  }

  // build query
  let cols = columns.join(", ");
  let query = `UPDATE ${table} SET ${cols} WHERE ${key}=$${idx} RETURNING *`;

  let values = Object.values(items);
  values.push(id);

  return { query, values };

}


module.exports = sqlForPartialUpdate;

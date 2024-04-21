import initSqlJs from "sql.js";

/*
 * This function loads the database file.
 */
export const loadDB = async (path: string) => {
  // Fetch the file from the provided path
  const response = await fetch(path);
  // Convert the fetched file into an array buffer
  const arrayBuffer = await response.arrayBuffer();
  // Return a new Uint8Array from the array buffer
  return new Uint8Array(arrayBuffer);
};

/*
 * This function initializes the database.
 */
export const initDatabase = async (path: string) => {
  // Initialize SQL.js with the wasm binary file located at "/sql-wasm.wasm"
  const SQL = await initSqlJs({ locateFile: () => "/sql-wasm.wasm" });
  // Create a new SQL Database instance with the loaded database file
  const db = new SQL.Database(await loadDB(path));
  // Return the database instance
  return db;
};

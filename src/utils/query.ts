import { Database, SqlValue } from "sql.js";
import { checkNodeType, getLimitAmount, getWhereProps, useDatabase } from "..";
import { useEffect, useState } from "react";
import { WhereProps } from "@/types";

/**
 * Executes a SQL query on a database using a JSX node.
 * @param {JSX.Element} node - The JSX node to use for the query.
 * @returns {SqlValue[][]} The records returned by the query.
 */
export const query = (node: JSX.Element): SqlValue[][] => {
  // Get the database instance
  const db = useDatabase();
  // Initialize state for the records
  const [records, setRecords] = useState<SqlValue[][]>([]);

  // Effect hook to execute the query when the database is available
  useEffect(() => {
    // If the database is not available, return
    if (!db) return;

    // Initialize the query array
    const queryArr = [];

    // If the node type is not "Select", return
    if (!checkNodeType(node, "Select")) {
      return;
    }

    // Add the SELECT and FROM clauses to the query
    queryArr.push("SELECT *");
    queryArr.push("FROM my_table");

    // Get the WHERE properties from the node and add the WHERE clause to the query
    const whereProps = getWhereProps(node);
    const whereQuery = getWhereQuery(whereProps);
    queryArr.push(whereQuery);

    // Get the LIMIT amount from the node and add the LIMIT clause to the query
    const amount = getLimitAmount(node);
    queryArr.push(`LIMIT ${amount}`);

    // Join the query array into a string
    const queryString = queryArr.join(" ");

    // Execute the query and set the records state
    const records = executeQuery(db, queryString);
    setRecords(records);
  }, [db]);

  // Return the records
  return records;
};

/**
 * Constructs a WHERE clause from the given properties.
 * @param {WhereProps} props - The properties to use for the WHERE clause.
 * @returns {string} The WHERE clause.
 */
const getWhereQuery = (props: WhereProps): string => {
  // Construct the WHERE clause
  const query =
    "WHERE " +
    props.map((item) => `${item.name} = '${item.value}'`).join(" AND ");

  // Return the WHERE clause
  return query;
};

/**
 * Executes a query on the given database.
 * @param {Database} db - The database to execute the query on.
 * @param {string} queryString - The query to execute.
 * @returns {SqlValue[][]} The records returned by the query.
 */
const executeQuery = (db: Database, queryString: string) => {
  // Execute the query
  const res = db.exec(queryString);
  // Get the records from the result
  const records = res[0].values;
  // Close the database
  db.close();
  // Return the records
  return records;
};

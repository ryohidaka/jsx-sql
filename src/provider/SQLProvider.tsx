import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { initDatabase } from "..";
import { Database } from "sql.js";

// Define the properties for the SQLProvider component
type Props = {
  dbPath: string; // The path to the database
  children: ReactNode; // The child components
};

// Create a context for the SQL database
const SQLContext = createContext<Database | null>(null);

// SQLProvider component provides the SQL database to its child components
const SQLProvider = ({ dbPath, children }: Props) => {
  // State for the database
  const [db, setDb] = useState<Database | null>(null);

  // Effect to load the database when the dbPath changes
  useEffect(() => {
    const loadDb = async () => {
      if (!dbPath) {
        // If there is no dbPath, set the database to null
        setDb(null);
      } else {
        // Otherwise, initialize the database and set it
        const db = await initDatabase(dbPath);
        setDb(db);
      }
    };

    // Call the loadDb function
    loadDb();
  }, [dbPath]);

  // Memoize the context value to optimize performance
  const contextValue = useMemo(() => db, [db, dbPath]);

  // Provide the database to child components
  return (
    <SQLContext.Provider value={contextValue}>{children}</SQLContext.Provider>
  );
};

// Custom hook to use the database context
const useDatabase = () => {
  const context = useContext(SQLContext);
  return context;
};

// Export the SQLProvider component and the useDatabase hook
export { SQLProvider, useDatabase };

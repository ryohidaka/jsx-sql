import { query } from "@/utils";
import { Column, Limit, Select, Where } from "..";

export default function Home() {
  const data = query(
    <Select>
      <Where>
        <Column name="status" value="paid" />
        <Column name="name" value="bob" />
      </Where>
      <Limit amount={5} />
    </Select>,
  );

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index}>
            <td>{record[0]}</td>
            <td>{record[1]}</td>
            <td>{record[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

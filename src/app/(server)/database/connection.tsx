import { sql } from "@vercel/postgres";

type User = {
  name: string;
  email: string;
};

const select = async function () {
  const { rows, fields } = await sql`SELECT * FROM users`;
  return rows;
};

const insert = async function (usr: User) {
  const { rows, fields } =
    await sql`INSERT INTO users (name , email) VALUES (${usr.name}, ${usr.email}) RETURNING*`;
  return rows;
};

const allQuerys = { select, insert };

export default allQuerys;

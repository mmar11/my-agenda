import allQuerys from "../../database/connection";

type User = {
  name: string;
  email: string;
};

export async function GET(request: Request) {
  const data = await allQuerys.select();

  return Response.json(data);
}

export async function POST(request: Request) {
  try {
    const requestData = await request.json();
    const data: User = requestData;

    if (!data) {
      // Handle null value
      console.error("User data is null");
      return new Response("User data is null", { status: 400 });
    }

    const createUser = await allQuerys.insert(data);

    return new Response(JSON.stringify(createUser), { status: 201 });
  } catch (error) {
    return new Response("Error occurred", { status: 500 });
  }
}

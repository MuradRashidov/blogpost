import { API_URL } from "./constants";

export const fetchGraphql = async (query: string, variables = {}) => {
  const response = await fetch(`${API_URL}graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await response.json();
  if (result.errors) {
    console.log(`GraphqlErrors: ${result.errors }`);
    throw new Error("Fail to fetch data from Graphql");
  }  
  console.log(1234567);
  
  return result.data;
};

const baseurl = "http://localhost:1573";

async function get<T>(url: string): Promise<T> {
  const response = await fetch(`${baseurl}${url}`);
  if (!response.ok) {
    throw new Error("Network response was not OK!");
  }
  return await response.json() as Promise<T>;
}

export { get };

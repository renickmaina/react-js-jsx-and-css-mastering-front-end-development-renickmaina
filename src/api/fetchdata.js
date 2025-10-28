
export async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

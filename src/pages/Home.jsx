
import useFetch from "../hooks/UseFetch";
import { fetchData } from "../api/fetchdata";
import Card from "../components/Card";

function Home() {
  const { data, loading, error } = useFetch(fetchData);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Latest Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default Home;

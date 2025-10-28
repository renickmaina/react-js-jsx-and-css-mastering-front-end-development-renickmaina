// src/components/Card.jsx
import { truncate } from "../utils/Format";

function Card({ title, body }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{truncate(body)}</p>
    </div>
  );
}

export default Card;

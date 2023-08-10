import { useParams } from "react-router-dom";

export function UniDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>UniDetail</h1>
      <h2>Route Parameter: {id}</h2>
    </div>
  );
}

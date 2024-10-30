import { useParams } from "react-router-dom";

export default function TodoDetailPage() {
  const { id } = useParams<{ id: string }>();
  return <div>todo detail {id}</div>;
}

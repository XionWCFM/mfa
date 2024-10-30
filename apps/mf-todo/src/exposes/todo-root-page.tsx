import { useNavigate } from "react-router-dom";

export default function TodoRootPage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/todo/29")}>클릭하면 이동</button>
      <button onClick={() => navigate("/todo/write")}>이건 write로 이동</button>
    </div>
  );
}

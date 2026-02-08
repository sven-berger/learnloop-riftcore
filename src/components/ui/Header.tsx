import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-800 rounded-2xl flex p-6">
      <h2 className="text-3xl text-white">
        <Link to="/">RiftCore.de</Link>
      </h2>
    </header>
  );
}

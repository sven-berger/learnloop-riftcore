export default function Sidebar() {
  const sidebar: Record<string, string> = {
    Startseite: "/",
    "Über mich": "/about/profile/",
    Test: "/test/",
  };

  return (
    <div className="min-h-full flex-1">
      <div className="">
        <aside className="bg-amber-400 rounded-3xl p-3">
          <nav>
            <ul className="space-y-2">
              {Object.entries(sidebar).map(([label, href]) => (
                <li key={href}>
                  <a
                    className="block rounded-lg p-2 hover:bg-amber-300"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}

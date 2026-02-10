interface NavigationLinkProps {
  title?: string;
  href?: string;
}

export default function NavigationLink({ title, href }: NavigationLinkProps) {
  return (
    <a className="block rounded-2xl p-2 hover:bg-amber-300" href={href}>
      {title}
    </a>
  );
}

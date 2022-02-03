import Link from "next/link";

type NavItemProps = {
  name: string;
  url: string;
  className?: string;
};

type Props = {
  navItems: NavItemProps[];
};

function NavItem({ name, url, className }: NavItemProps): JSX.Element {
  return (
    <li>
      <Link href={url}>
        <a
          className={`text-xl font-extrabold italic text-indigo-500 transition-colors ${className} hover:text-emerald-500`}
        >
          {name}
        </a>
      </Link>
    </li>
  );
}

export default function Nav({ navItems }: Props): JSX.Element {
  return (
    <nav className="border-b-2 border-indigo-200 dark:border-indigo-800">
      <ul className="flex flex-row justify-center gap-4 p-16">
        {navItems.map((item) => (
          <NavItem {...item} key={item.name} />
        ))}
      </ul>
    </nav>
  );
}

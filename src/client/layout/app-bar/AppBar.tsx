import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../../components/logo";

const links = [
  { label: "Story", href: "/story" },
  { label: "Recipes", href: "/recipes" },
];

const AppBar = () => {
  const router = useRouter();

  return (
    <div className="pt-safe fixed top-0 left-0 z-20 w-full bg-zinc-900">
      <header className="px-safe border-b bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex h-20 max-w-screen-lg items-center justify-between px-6">
          <Link href="/">
            <Logo withText />
          </Link>

          <nav className="flex items-center space-x-6">
            <div className="hidden sm:block">
              <div className="flex items-center space-x-6">
                {links.map(({ label, href }) => (
                  <Link key={label} href={href}>
                    <p
                      className={`text-sm ${
                        router.pathname === href
                          ? "text-indigo-500 dark:text-indigo-400"
                          : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      }`}
                    >
                      {label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export { AppBar };

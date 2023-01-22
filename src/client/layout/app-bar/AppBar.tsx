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
    <div
      className="pt-safe supports-backdrop-blur:bg-white/95 fixed
        top-0 left-0 z-20  w-full bg-white backdrop-blur-lg transition-colors duration-500
      dark:border-slate-50/[0.06] dark:bg-slate-900/75 lg:z-50 lg:border-b lg:border-slate-900/10"
    >
      <header className="border-b border-slate-900/10  dark:border-slate-300/10">
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

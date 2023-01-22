import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../../components/logo";

const activeClass = "border-b border-primary opacity-100";
const nonActiveClass = "opacity-70";

const AppBar = () => {
  const { pathname } = useRouter();
  const { data: sessionData } = useSession();

  const handleLogout = () => void signOut();

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

          <nav className="hidden items-center space-x-6 sm:block">
            {!sessionData && (
              <>
                <Link href="/login">
                  <button
                    className={`border-b pb-1 hover:opacity-100 ${
                      pathname === "/login" ? activeClass : nonActiveClass
                    }`}
                  >
                    Login
                  </button>
                </Link>
                <Link
                  href="register"
                  className={`border-b pb-1 hover:opacity-100 ${
                    pathname === "/register" ? activeClass : nonActiveClass
                  }`}
                >
                  <button>Register</button>
                </Link>
              </>
            )}

            {sessionData && <button onClick={handleLogout}>Log out</button>}
          </nav>
        </div>
      </header>
    </div>
  );
};

export { AppBar };

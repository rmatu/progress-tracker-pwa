import Head from "next/head";
import { AppBar } from "../app-bar";

import { BottomNav } from "../bottom-nav";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page = ({ title = "Resolution Tracker", children }: Props) => (
  <>
    {title ? (
      <Head>
        <title>{title}</title>
      </Head>
    ) : null}

    <AppBar />

    <main className="px-safe mx-auto max-w-screen-lg pt-20 pb-16 sm:pb-0">
      <div className="p-6">{children}</div>
    </main>

    <BottomNav />
  </>
);

import Head from "next/head";
import styled from "styled-components";
import css from "styled-jsx/css";
import { AppBar } from "../app-bar";

import { BottomNav } from "../bottom-nav";

interface Props {
  title?: string;
  children: React.ReactNode;
  center?: boolean;
}

export const Page = ({
  title = "Resolution Tracker",
  children,
  center,
}: Props) => (
  <>
    {title ? (
      <Head>
        <title>{title}</title>
      </Head>
    ) : null}

    <AppBar />

    <Main
      center={center}
      className="px-safe mx-auto h-[calc(100vh)] max-w-screen-lg pt-20 pb-16 sm:pb-0"
    >
      <div className="h-full p-6">{children}</div>
    </Main>

    <BottomNav />
  </>
);

const Main = styled.div<{ center: boolean }>`
  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

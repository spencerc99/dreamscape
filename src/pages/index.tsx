import { useEffect } from "react";
import { SoundFile } from "../components/SoundFile";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

async function initPlayhtml() {
  const playhtml = (await import("@playhtml/react")).playhtml;

  playhtml.init({ room: "dreamscape" });
}

export default function Home() {
  useEffect(() => {
    void initPlayhtml();
  });
  return (
    <>
      <Head>
        <title>new next app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <h1 className={styles.title}>Welcome to new next app!</h1>
        <SoundFile soundUrl="/lamp-off.m4a" />
      </main>
    </>
  );
}

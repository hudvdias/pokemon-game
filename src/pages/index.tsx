import type { NextPage } from "next";
import Head from "next/head";
import { HomeScreen } from "../screens/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hud Poke Game</title>
      </Head>

      <HomeScreen />
    </>
  );
};

export default Home;

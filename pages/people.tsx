import { motion } from "framer-motion";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PeoplePopular from "../components/person/PeoplePopular";
import SignIn from "../components/SignIn";
import { PopularTyping } from "../typings";
import peopleRequests from "../utils/personRequest";

type Props = {
  popular: PopularTyping[];
  session: any;
};

function People({ popular, session }: Props) {
  if (!session) return <SignIn />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Movezic</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://drive.google.com/file/d/1WQJh3VYOZwQMsLdM-VXv6VuoLdEB9xG4/view?usp=sharing"
        />
      </Head>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900">
        <main className="relative pl-4 pb-24 lg:space-y-24">
          <PeoplePopular popular={popular} />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}

export default People;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  const [popular] = await Promise.all([
    fetch(peopleRequests.fetchPopular).then((res) => res.json()),
  ]);

  return {
    props: {
      popular: popular.results,
      session: session,
    },
  };
};

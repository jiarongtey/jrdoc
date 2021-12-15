import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import SideBar from "../../components/sidebar2";

export default function Princples() {
  return (
    <div
      className="flex justify-center w-10/12 pb-20
    "
    >
      {" "}
      <Head>
        <title>JR - Principles</title>
        <meta name="description" content="JR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <SideBar parent="artofcode" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className="w-2/3 mt-10 ml-5 "
      >
        <h1 className="text-5xl font-medium">Principles</h1>
        <p className="mt-5"></p>
        <div
          tabIndex="0"
          className="collapse w-full border rounded-box border-base-100 collapse-arrow collapse-open "
        >
          <div className="collapse-title text-xl font-medium">Defination</div>
          <div className="collapse-content">
            <p>
              They will help you to create a clean and modular design, which
              would be easy to test, debug, and maintain in the future.
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-normal mt-5">
          Single-responsibility principle
        </h2>
        <p className="my-5">A class focused on a single concern </p>
        <Image
          className="rounded-lg"
          alt="single-responsiblity"
          src="/single-responsibility.png"
          width={668}
          height={384}
        />
        <h2 className="text-4xl font-normal mt-5">Open-closed principle</h2>
        <p className="mt-5">
          Add new function without changing the existing code.
        </p>
        <p className="mt-2">
          <span className="badge  badge-primary">OPEN</span> for extension
        </p>
        <p className="mt-2 mb-5">
          <span className="badge ">CLOSE</span> for modification
        </p>
        <Image
          className="rounded-lg"
          alt="single-responsiblity"
          src="/openclose.png"
          width={668}
          height={384}
        />
      </motion.div>
    </div>
  );
}

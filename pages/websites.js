import Image from "next/image";
import { motion } from "framer-motion";
export default function Websites() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
      className="grid grid-cols-3 gap-4 m-10"
    >
      <div className="card text-center shadow-2xl ">
        <figure className="px-10 pt-10">
          <Image
            width={640}
            height={310}
            src="/namegenerator.png"
            className="rounded-lg shadow-lg"
            alt="namegenerator"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name Generator</h2>
          <p>
            A simple generator application, created by next.js, tailwindcss. It
            can generator thousand of names.
          </p>
          <div className="justify-center card-actions">
            <a
              href="https://namegenerator-sand.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-accent"
            >
              More info
            </a>
          </div>
        </div>
      </div>
      <div className="card text-center shadow-2xl ">
        <figure className="px-10 pt-10">
          <Image
            width={640}
            height={310}
            src="/travelme.png"
            className="rounded-lg shadow-lg"
            alt="namegenerator"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Travel Me</h2>
          <p>A pos system for reseller and retailer</p>
          <div className="justify-center card-actions">
            <a
              href="https://travelme-475c1.web.app/"
              className="btn btn-outline btn-accent"
              target="_blank"
              rel="noreferrer"
            >
              More info
            </a>
          </div>
        </div>
      </div>
      <div className="card text-center shadow-2xl ">
        <figure className="px-10 pt-10">
          <Image
            width={640}
            height={310}
            src="/axarpos.png"
            className="rounded-lg shadow-lg"
            alt="namegenerator"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Axar Pos</h2>
          <p>A pos system for reseller and retailer</p>
          <div className="justify-center card-actions">
            <button className="btn btn-outline " disabled={true}>
              Not available{" "}
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="card text-center shadow-2xl ">
        <figure className="px-10 pt-10">
          <Image
            width={640}
            height={310}
            src="/17july.png"
            className="rounded-lg shadow-lg"
            alt="namegenerator"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">SeventeenJuly</h2>
          <p>A sneaker e-ecommerce store application.</p>
          <div className="justify-center card-actions">
            <button className="btn btn-outline " disabled={true}>
              Not available{" "}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

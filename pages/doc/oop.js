import Code from "../../components/code";
import Head from "next/head";
import SideBar from "../../components/sidebar";
import { motion } from "framer-motion";

export default function ObjectOrientedProgramming() {
  return (
    <div
      className="flex justify-center w-10/12 pb-20
    "
    >
      {" "}
      <Head>
        <title>JR - Object Oriented Programming</title>
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
        <h1 className="text-5xl font-medium">Object-oriented programming</h1>
        <p className="mt-5"></p>
        <div
          tabIndex="0"
          className="collapse w-full border rounded-box border-base-100 collapse-arrow collapse-open "
        >
          <div className="collapse-title text-xl font-medium">Defination</div>
          <div className="collapse-content">
            <p>
              Object-oriented programming (OOP) is a computer programming model
              that organizes software design around data, or objects, rather
              than functions and logic.
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-normal mt-5">Encapsulation</h2>
        <p className="mt-5">
          process of wrapping code and data together into a single unit{" "}
          <span className="badge badge-outline">SETTER</span> and{" "}
          <span className="badge badge-outline">GETTER</span>
        </p>
        <Code
          codes={[
            "public class Cat{",
            "	private String name;",
            "	private String species;",
            " ",
            "	public String getName(){  // Getter method",
            "		return this.name",
            "	}",
            "",
            "	public void setName(String name){ // Setter method",
            "		this.name = name",
            "	}",
            "}",
          ]}
        />
        <h2 className="text-4xl font-normal mt-5">Abstraction</h2>
        <p className="mt-5">
          process of hiding the implementation details and showing only
          functionality to the user.{" "}
          <span className="badge badge-outline">PRIVATE</span> {"& "}
          <span className="badge badge-outline">PUBLIC</span>
        </p>
        <Code
          codes={[
            "private String name; // Hidden",
            "public String getName(){ // Show to the user",
            "	return this.name;",
            "}",
          ]}
        />
        <h2 className="text-4xl font-normal mt-5">Inheritance</h2>
        <p className="mt-5">
          Inheritance is a mechanism of acquiring the features and behaviors of
          a class by another class.{" "}
          <span className="badge badge-outline">EXTENDS</span>
        </p>
        <Code
          codes={[
            "class Animal {",
            "  // methods and fields",
            "}",
            "",
            "// use of extends keyword",
            "// to perform inheritance",
            "class Dog extends Animal {",
            "  // methods and fields of Animal",
            "  // methods and fields of Dog",
            "}",
          ]}
        />
        <h2 className="text-4xl font-normal mt-5">Polymorphism</h2>
        <p className="mt-5">Perform a single action in different way</p>
        <Code
          codes={[
            "class Animal {",
            "public void animalSound() {",
            '    System.out.println("The animal makes a sound");',
            "  }",
            "}",
            "",
            "class Pig extends Animal {",
            "  public void animalSound() {",
            '    System.out.println("The pig says: wee wee");',
            "  }",
            "}",
            "class Dog extends Animal {",
            "  public void animalSound() {",
            '    System.out.println("The dog says: woof woof");',
            "  }",
            "}",
          ]}
        />
      </motion.div>
    </div>
  );
}

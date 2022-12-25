import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import { NextPage } from "next";
import Link from "next/link";

const patterns = [
  {
    name: "Strategy Pattern",
    link: "patterns/strategy",
    description:
      "The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.",
    icon: GlobeAltIcon,
  },
  {
    name: "Observer Pattern",
    link: "patterns/observer",
    description:
      "The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.",
    icon: ScaleIcon,
  },
  {
    name: "Decorator Pattern",
    link: "patterns/decorator",
    description:
      "The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.",
    icon: ScaleIcon,
  },
  {
    name: "Factory Pattern",
    link: "patterns/factory",
    description:
      "The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.",
    icon: GlobeAltIcon,
  },
  {
    name: "Singleton Pattern",
    link: "patterns/singleton",
    description:
      "The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.",
    icon: GlobeAltIcon,
  },
  {
    name: "Command Pattern",
    link: "patterns/command",
    description:
      "The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.",
    icon: GlobeAltIcon,
  },
  {
    name: "Adapter Pattern",
    link: "patterns/adapter",
    description:
      "The Adapter Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.",
    icon: GlobeAltIcon,
  },
  {
    name: "Facade Pattern",
    link: "patterns/factory",
    description:
      "The Facade Pattern provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher- level interface that makes the subsystem easier to use.",
    icon: GlobeAltIcon,
  },
  {
    name: "Template Method Pattern",
    link: "patterns/template",
    description:
      "The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.",
    icon: GlobeAltIcon,
  },
  {
    name: "Iterator Pattern",
    link: "patterns/iterator",
    description:
      "The Iterator Pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.",
    icon: BoltIcon,
  },
  {
    name: "Composite Pattern",
    link: "patterns/composite",
    description:
      "The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "State Pattern",
    link: "patterns/state",
    description:
      "The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Proxy Pattern",
    link: "patterns/proxy",
    description:
      "The Proxy Pattern provides a surrogate or placeholder for another object to control access to it.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Combined Pattern",
    link: "patterns/compound-a",
    description: "TBD: a compound pattern (last chapter of book).",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Combining Pattern",
    link: "patterns/compound-b",
    description: "TBD: a compound pattern (last chapter of book).",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

const Home: NextPage = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            Building Extensible & Maintainable Object-Oriented Software
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-slate-100 sm:text-4xl">
            Design Patterns
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Inspired by Headless Design Patterns by Eric Freeman & Elisabeth
            Robson with Kathy Sierra & Bert Bates
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {patterns.map((pattern) => (
              <div key={pattern.name} className="relative">
                <Link href={pattern.link}>
                  <a>
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-slate-700 text-white">
                        <pattern.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-slate-300">
                        {pattern.name}
                      </p>
                    </dt>
                  </a>
                </Link>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {pattern.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home;

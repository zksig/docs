import React from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import {
  DocumentPlusIcon,
  PencilSquareIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Container } from "./Container";
import screenshotAgreement from "../../static/img/screenshots/agreement.png";
import screenshotSignature from "../../static/img/screenshots/signature.png";
import screenshotProof from "../../static/img/screenshots/signature-certificate.png";

const features = [
  {
    name: "Create",
    summary: "Upload PDF documents, add text, and assign participants to sign.",
    description:
      "We encrypt all documents in your browser so we never read your information. Zero knowledge proofs are generated when agreements are created.",
    image: screenshotAgreement,
    icon: DocumentPlusIcon,
  },
  {
    name: "Sign",
    summary: "Participants sign documents using a unique link.",
    description:
      "Zero knowledge proofs of each signature are generated in the browser when a participant signs.",
    image: screenshotSignature,
    icon: PencilSquareIcon,
  },
  {
    name: "Share",
    summary: "Share a zero knowledge proof certificate or a PDF copy.",
    description:
      "Participants can download and share PDF copies of signed agreements, share a zero knowledge proof of signature, or both!",
    image: screenshotProof,
    icon: ShareIcon,
  },
];

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && "opacity-75 hover:opacity-100")}
      {...props}
    >
      <div
        className={clsx(
          "flex h-12 w-12 items-center justify-center rounded-xl  text-gray-100",
          isActive ? "bg-emerald-400" : "bg-slate-400"
        )}
      >
        <feature.icon className="h-8 w-8" aria-hidden="true" />
      </div>
      <p className="mt-2 font-display text-lg font-semibold text-slate-900 text-left">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600 text-left">
        {feature.description}
      </p>
    </div>
  );
}

function UserFlow() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <img
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopFlow() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Tab>
                <Feature
                  key={feature.name}
                  feature={{
                    ...feature,
                    name: (
                      <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                        <span className="absolute inset-0" />
                        {feature.name}
                      </Tab>
                    ),
                  }}
                  isActive={featureIndex === selectedIndex}
                  className="relative"
                />
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    "px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none",
                    featureIndex !== selectedIndex && "opacity-60"
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <img
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How it works"
      className="bg-gray-100 pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-800 sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Simplify your esignature management while protecting documents with
            powerful zero knowledge proofs.
          </p>
        </div>
        <UserFlow />
        <DesktopFlow />
      </Container>
    </section>
  );
}

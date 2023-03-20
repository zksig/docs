import React from "react";
import useCollapse from "react-collapsed";
import { Container } from "./Container";
import backgroundImage from "../../static/img/background-faqs.jpg";

const faqs = [
  [
    {
      question: "What is zkSig?",
      answer:
        "zkSig is an esignature and document management platform designed for connecting on-chain activity with off-chain enforcement. We use zero knowledge proofs and on-chain audit trails to securely share select data from digital documents, unlocking web3 workflows with smart contract hooks, while integrating with existing web2 applications.",
    },
    {
      question: "Who is zkSig for?",
      answer: (
        <p>
          {" "}
          * Anyone wanting extra security around their digital documents and
          sensitive data. <br />
          * Builders creating applications based on data currently locked in
          digital documents <br />
          * Individuals and organizations wanting to connect legal agreements
          and on-chain transactions <br />* Those working to bridge the gap
          between web2 and web3{" "}
        </p>
      ),
    },
    {
      question: "Are zkSig and DocuSign the same thing?",
      answer:
        "Nope. Although zkSig and DocuSign are both esignature platforms, zkSig is web3 compatible, non-custodial, and decentralized.",
    },
  ],
  [
    {
      question: "How does zkSig create legally binding agreements?",
      answer:
        "Our platform follows a signing process that complies with the Electronic Signatures In Global and National Commerce (ESIGN) Act which became U.S. law in June of 2000. Notably, we notify signers that their signatures are binding and provide users ongoing access to their completed documents and related information.",
    },
    {
      question: "Do I need a crypto wallet to use zkSig?",
      answer:
        "No need to create or connect a wallet to use zkSig. We use web3Auth so you can log in with an email address.",
    },
    {
      question: "Can I download and save my zkSig docs?",
      answer:
        "Yes! Users who originate or sign a document can download PDF copies of the signed document along with a certificate with additional details about the document.",
    },
  ],
  [
    {
      question: "How is zkSig decentralized and non-custodial?",
      answer:
        "We encrypt and hash information about digital agreements before storing the hash on decentralized public blockchains, not on servers we own or operate. We also encrypt PDF documents before storing them on Filecoin’s decentralized storage network. Only individuals who are parties to an agreement can decipher digital document information and PDF agreements using their private keys. We cannot access user private keys.",
    },
    {
      question: "Is my personal data safe with zkSig?",
      answer:
        "We think so! Because agreement details and PDF documents are encrypted and hashed before reaching our system, we can’t see any sensitive information in or about your agreements. This means that were someone to break into our system, they couldn’t see that information either.",
    },
    {
      question: "Where can developers find more info?",
      answer:
        "Our technical docs will be up shortly. In the meantime reach out via email!",
    },
  ],
];

function CollapsibleQuestion({ question, answer }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <h3
        className="header font-display text-lg font-semibold leading-7 text-gray-300"
        {...getToggleProps()}
      >
        {isExpanded ? `- ${question}` : `+ ${question}`}
      </h3>
      <div {...getCollapseProps()}>
        <div className="content">
          <p className="text-md mt-4 text-gray-100">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-gray-800 py-20 sm:py-32"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute bottom-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="8d958450-c69f-4251-94bc-4e091a323369"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#38bdf8" />
            <stop offset={1} stopColor="#34d399" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
      <Container className="relative">
        <div className="mx-auto">
          <h2
            id="faq-title"
            className="text-center font-display text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-lg tracking-tight text-gray-300">
            If you can’t find what you’re looking for, email{" "}
            <a href="mailto:hello@zksig.io">hello@zksig.io</a> and we'll do our
            best to get you the information you need.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <CollapsibleQuestion
                      question={faq.question}
                      answer={faq.answer}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

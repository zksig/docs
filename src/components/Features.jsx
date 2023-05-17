import React from "react";
import {
  BanknotesIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const sendSignShareFeatures = [
  {
    id: 1,
    name: "Gnosis Safe Automation",
    description:
      "Automatically create Gnosis Safe transactions pending approval with details like recipient and amount from signed agreements. Wallet owners can verify transaction details with attached zero knowledge proofs without needing access to the original document.",
    icon: BanknotesIcon,
  },
  {
    id: 2,
    name: "Discord Agreement Gates",
    description:
      "Create PDF or clickwrap agreements that gate access to discord servers. Add roles to users based on agreement details without leaking private agreement data.",
    icon: LockClosedIcon,
  },
  {
    id: 3,
    name: "Invoke Smart Contracts",
    description:
      "Call smart contract methods with agreement data and a zero knowledge proof verifying the data is contained within the signed agreement.",
    icon: DocumentCheckIcon,
  },
  {
    id: 4,
    name: "Trigger Webhooks",
    description:
      "Call webhooks to integrate with existing web2 workflows with only the agreement data needed to execute those workflows.",
    icon: GlobeAltIcon,
  },
];
const web3Features = [
  {
    id: 1,
    name: "NFT Terms and Conditions",
    description:
      "Link NFT Terms and Conditions with legally binding agreements. Mint or transfer NFTs in response to eSignature events.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: "Filecoin Storage",
    description:
      "Block or accept storage deals based on signed service agreements.",
    icon: EnvelopeIcon,
  },
  {
    id: 3,
    name: "DAO Management",
    description:
      "Sign contracts or issue documents that trigger smart contract actions while protecting member anonymity.",
    icon: ClipboardDocumentCheckIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                Communicate without compromising privacy
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Shared agreement details across your organization, applications,
                and third-party services without divulging the entire document.
                Details are cryptographically proven using revolutionary zero
                knowledge proofs.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {sendSignShareFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-emerald-400"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="m-0 inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <img src="/img/screenshots/gnosis-safe-templates.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

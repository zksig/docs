import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-800">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-emerald-900 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            Your Agreements <br />
            <span className="text-emerald-400">Unlocked</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Share details about your legally binding agreements without
            divulging private information.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://forms.gle/4x54iZKr8R3dk6pL8"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-yellow-200 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-800 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Request Early Access
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              className="invisible w-[76rem] h-auto rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-800">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100">
            Start unlocking your agreements
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://forms.gle/4x54iZKr8R3dk6pL8"
              className="rounded-md bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
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
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Home`}
      description="Privacy-first legally binding agreements for a tokenized world"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CTA />
      </main>
    </Layout>
  );
}

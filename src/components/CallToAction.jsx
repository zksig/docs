import React from "react";
import mixpanel from "mixpanel-browser";

export function CallToAction() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-800">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100">
            Start unlocking your agreements
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://alpha.zksig.io"
              className="rounded-md bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-800 shadow-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => mixpanel.track("CTA Login")}
            >
              Try Our Alpha
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

import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import mixpanel from "mixpanel-browser";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Button } from "./Button";

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as="a" href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <div className="column flex flex-col items-center gap-2">
              <Button variant="outline" className="w-full" href="/docs">
                Documentation
              </Button>
              <hr className="m-2 w-full border-slate-300/40" />
              <Button
                variant="solid"
                className="w-full"
                href="/waitlist"
                onClick={() => mixpanel.track("Header Login")}
              >
                Register Now
              </Button>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  return (
    <header className="py-4">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </a>
            <div className="hidden md:flex md:gap-x-6"></div>
          </div>
          <div className="hidden items-center gap-x-4 md:flex md:gap-x-4">
            <Button variant="outline" href="/docs">
              Documentation
            </Button>
            <Button
              variant="solid"
              href="/waitlist"
              onClick={() => mixpanel.track("Header Login")}
            >
              Register Now
            </Button>
          </div>
          <div className="-mr-1 flex items-center md:hidden">
            <MobileNavigation />
          </div>
        </nav>
      </Container>
    </header>
  );
}

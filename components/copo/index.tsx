"use client";
import React from "react";
import { CalendarDemo, Charts, ChartTwoLines } from "../chart";
import { LineCharts } from "../chart/line";
import { Goal } from "../goal";
import { LoginForm } from "../login";
import ChatUI from "../chat";
import { TabsDemo } from "../tabs";
import { TableTodo } from "../todo";
import { Button } from "../ui/button";

const styles =
  " after:absolute after:inset-x-0 after:-bottom-8 lg:after:-bottom-5  after:z-10 after:w-full after:h-[300px] after:bg-gradient-to-t after:from-white after:via-white/90 after:pointer-events-none dark:after:from-background dark:after:via-background/95";

const Copo = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="mt-10">
        <div className="relative ">
          <div
            className={`my-12 md:pt-24 relative overflow-hidden ${
              !show && styles
            } `}
          >
            <h2 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              <div className="text-6xl">700+</div>Tailwind CSS{" "}
              <span>Components</span>
            </h2>
            <div className="opacity-70 max-w-2xl mx-auto mt-2 text-gray-500 dark:text-neutral-400">
              Based on the Tailwind CSS utility classNamees, Preline UI&#x27;s
              prebuilt components and UI elements help you quickly design and
              customize responsive mobile-first websites.
            </div>
            <div className="mt-6">
              <div className="grid  !grids-col-1  gap-4 lg:grid-cols-1 xl:grid-cols-4   items-start  ">
                <LineCharts />
                <Charts />
                <CalendarDemo />
                <Goal />
                <div className={` ${!show ? "hidden" : "inline"}`}>
                  <LoginForm />
                </div>
                <div className={` ${!show ? "hidden" : "inline"}`}>
                  <ChatUI />
                </div>
                <div className={`col-span-2 max-[600px]:col-span-1 ${!show ? "hidden" : "inline"}`}>
                  <ChartTwoLines />
                </div>
                <div className={`col-span-2 max-[600px]:col-span-1 ${!show ? "hidden" : "inline"}`}>
                  <TabsDemo />
                </div>
                <div className={`col-span-2 max-[600px]:col-span-1 ${!show ? "hidden" : "inline"}`}>
                  <TableTodo />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="mx-auto  mb-10  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 absolute top- bottom-0 left-1/2 z-20 -translate-x-1/2 "
            style={{ display: show ? "none" : "flex" }}
            onClick={() => setShow(!show)}
          >
            Show more
          </Button>
        </div>
      </div>
    </>
  );
};

export default Copo;

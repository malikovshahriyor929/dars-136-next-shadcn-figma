import React from "react";
import { Button } from "../ui/button";
import { CheckIcon, Paintbrush, Zap } from "lucide-react";

const Showcase = () => {
  return (
    <>
      <div className="flex items-center gap-5 justify-between max-[930px]:justify-center   max-[930px]:text-center ">
        <div>
          <h1 className="text-3xl font-bold leading-tight max-[930px]:text-center tracking-tighter md:text-5xl lg:leading-[1.1] text-left">
            <span className="relative ">
              Shadcn UI Pro
            </span>
            <br /> Ship your startup rapidly
          </h1>
          <p className="text-xl max-w-[500px] mt-2">
            Elegant, Simple, and Powerful NextJS boilerplate with all you need
            to build your SaaS.
          </p>
          <div className="flex flex-col gap-5 mt-5  space-x-4 max-[930px]:items-center ">
            {/* Color Swatches */}
            <div className="flex items-center gap-5 max-[374px]:flex-col">
              <div className="flex items-center gap-3">
                <div className="relative size-6 rounded-full bg-zinc-800 dark:bg-zinc-700 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-zinc-600 dark:bg-zinc-800 flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-gray-400" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-zinc-400 dark:border-zinc-500 pointer-events-none" />
                </div>
                <div className="size-6 rounded-full bg-red-500 cursor-pointer" />
                <div className="size-6 rounded-full bg-blue-500 cursor-pointer" />
                <div className="size-6 rounded-full bg-green-500 cursor-pointer" />
                <div className="size-6 rounded-full bg-orange-500 cursor-pointer" />
              </div>

              {/* Customize Button */}
              <Button className="rounded-md shadow-sm">
                <Paintbrush className="mr-2 h-4 w-4" />
                Customize
              </Button>
            </div>

            <div className=" flex items-center gap-5  max-[374px]:flex-col">
              <Button className="bg-white text-black rounded-md shadow-sm hover:bg-gray-100">
                <Zap />
                Get Started
              </Button>
              <Button variant="outline" className="!bg-background">
                $ git clone shadcn-ui-pro
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[40rem] max-[1119px]:max-w-[30rem] max-[930px]:hidden">
          <img src="../../image.png" alt="asdasd" />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] ">
          Ship faster with endless integrations
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-8">
          {Array(6)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-neutral-800 dark:focus:outline-none dark:focus:bg-neutral-800"
              >
                <div className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="block font-bold text-gray-800 dark:text-white">
                    Tailwind
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Tailwind des
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Showcase;

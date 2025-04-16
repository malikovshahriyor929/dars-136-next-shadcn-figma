"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export function ModeToggle() {
  const { setTheme } = useTheme();
  const [check, setCheck] = React.useState(localStorage.getItem("as") || true);

  return (
    <>
      <div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setTheme("light");
            setCheck(!check);
            localStorage.setItem("as", JSON.stringify(!check));
          }}
          className={` ${!check ? "hidden" : "flex"}`}
        >
          <Moon
            className={` absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
          />
        </Button>
        <Button
          className={` ${check ? "hidden" : "flex"}`}
          variant="outline"
          size="icon"
          onClick={() => {
            setTheme("dark");
            setCheck(!check);
            localStorage.setItem("as", JSON.stringify(!check));
          }}
        >
          <Sun
            className={` h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100`}
          />
        </Button>
      </div>
    </>
  );
}

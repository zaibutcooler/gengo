"use client";

import { type DialogProps } from "@radix-ui/react-alert-dialog";
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

import { sidebarLinks } from "./constant";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "min-w-38  relative justify-start text-sm text-muted-foreground sm:pr-12 lg:min-w-64",
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="opacity-0 lg:opacity-100">Find Something...</span>
        <kbd className="top-1.8 pointer-events-none absolute right-1.5  h-5 select-none items-center gap-1  px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <SearchIcon className="h-4 w-4" />
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup>
            {sidebarLinks.map((link) => (
              <CommandItem
                key={link.route}
                value={link.label}
                onSelect={() => {
                  runCommand(() => router.push(link.route as string));
                }}
              >
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <link.icon className="h-3 w-3" />
                </div>
                {link.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

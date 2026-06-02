import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl", className)}>
      <div className={cn("bg-[#f5f1ea]", innerClassName)}>{children}</div>
    </div>
  );
};

export default Container;

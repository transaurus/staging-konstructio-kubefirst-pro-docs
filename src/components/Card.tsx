import clsx, { ClassValue } from "clsx";
import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const Card: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => <div className={cn("rounded-lg py-4 px-8", className)}>{children}</div>;

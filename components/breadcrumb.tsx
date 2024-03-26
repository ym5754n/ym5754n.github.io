"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useSelectedLayoutSegments } from "next/navigation";

export function BreadcrumbShow() {
  const segments = useSelectedLayoutSegments();
  let joinedSegment = "";
  let display = "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {segments.length === 0
            ? <BreadcrumbPage>Home</BreadcrumbPage>
            : <BreadcrumbLink href="/">Home</BreadcrumbLink>}
        </BreadcrumbItem>
        {segments.map((segment, key) => {
          joinedSegment += segment + "/";
          display = key === 0 ? segment.charAt(0).toUpperCase() + segment.slice(1) : segment;
          return (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {key < segments.length - 1
                ? <BreadcrumbLink href={`/${joinedSegment}`}>{display}</BreadcrumbLink>
                : <BreadcrumbPage>{display}</BreadcrumbPage>
              }
            </BreadcrumbItem>
          </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
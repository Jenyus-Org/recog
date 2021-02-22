import { Button } from "@ui/Button";
import {
  Card,
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  CardSidebar,
} from "@ui/Card";
import clsx from "clsx";
import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

export const PostCardSkeleton = () => (
  <Card className={clsx("bg-white", "animate-pulse")} key={val}>
    <CardSidebar className={clsx("grid", "gap-4")}>
      <Button pill>
        <BsArrowUpShort />
      </Button>
      <Button pill>
        <BsArrowDownShort />
      </Button>
    </CardSidebar>
    <CardBody>
      <CardHeader>
        <div
          className={clsx("h-6", "bg-gray-100", "rounded", "w-3/4", "mb-2")}
        />
      </CardHeader>
      <CardContent>
        <div
          className={clsx("h-4", "bg-gray-100", "rounded", "mb-2", "mr-2")}
        />
        <div className={clsx("h-4", "bg-gray-100", "rounded", "w-5/6")} />
      </CardContent>
    </CardBody>
    <CardFooter>
      <div className={clsx("h-4", "bg-gray-100", "rounded", "w-1/4")} />
    </CardFooter>
  </Card>
);

import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonCardProduct() {
  return (
    <Card className="space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg h-72">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-4 w-2/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-10 w-full rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-10 w-full rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card>
  );
}

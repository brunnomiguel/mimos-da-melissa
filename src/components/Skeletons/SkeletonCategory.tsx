import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonCategory() {
  return (
    <Card className="w-96 h-28 space-x-4 p-4" radius="lg">
      <div className="flex items-center gap-4">
        <Skeleton className="rounded-full w-20 h-20">
          <div className="w-full h-full bg-default-600" />
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-28 h-6 rounded-md">
            <div className="h-full w-full bg-default-200" />
          </Skeleton>
          <Skeleton className="w-48 h-6 rounded-md">
            <div className="h-full w-3/4 bg-default-200" />
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}

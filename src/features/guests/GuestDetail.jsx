import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Avatar from "@/ui/Avatar";
import { formatPhoneNumber } from "@/utils/helpers";
import { BellRing, Check, PhoneCall } from "lucide-react";

function GuestDetail() {
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

  return (
    <div className="flex flex-col gap-8 bg-slate-400 p-5">
      <Card className="flex flex-row items-center justify-evenly py-6">
        <CardHeader className="flex flex-row items-center gap-5">
          <div>
            <Avatar
              src="default-user.jpg"
              alt="guest image"
              radius="full"
              h="auto"
              w="auto"
            />
          </div>
          <div className="flex flex-col gap-3">
            <CardTitle>王曉明</CardTitle>
            <CardDescription className="flex items-center gap-3">
              <PhoneCall className="size-4" />
              <span className="text-base">
                {formatPhoneNumber("0936481956")}
              </span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex gap-6">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="grid grid-cols-[25px_1fr] items-start border-2 border-primary"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <div className="h-20 bg-slate-50">CHART</div>
    </div>
  );
}

export default GuestDetail;

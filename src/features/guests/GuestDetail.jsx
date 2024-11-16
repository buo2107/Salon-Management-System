import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Avatar from "@/ui/Avatar";
import { formatPhoneNumber } from "@/utils/helpers";
import { PhoneCall } from "lucide-react";
import GuestPieChart from "./GuestPieChart";
import GuestBarChart from "./GuestBarChart";

function GuestDetail() {
  const data = [
    {
      title: "來訪次數",
      value: "8",
    },
    {
      title: "常用服務",
      value: "剪髮",
    },
    {
      title: "最近來訪",
      value: "2024/11/19",
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-5">
      <Card className="flex flex-row items-center justify-evenly border-2 border-primary py-3">
        <CardHeader className="flex flex-col items-center gap-3">
          <div>
            <Avatar
              src="default-user.jpg"
              alt="guest image"
              radius="full"
              h="auto"
              w="auto"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <CardTitle>王曉明</CardTitle>
            <CardDescription className="flex items-center gap-3">
              <PhoneCall className="size-4" />
              <span className="text-base">
                {formatPhoneNumber("0936481956")}
              </span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-3">
          <div className="flex flex-row gap-16">
            {data.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-md border-2 border-primary p-8"
              >
                <h4 className="text-lg font-semibold text-primary">
                  {item.title}
                </h4>
                <Separator className="my-4 bg-primary" />
                <p className="text-3xl font-semibold text-primary/70">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chart */}
      <div className="flex flex-row items-stretch justify-between gap-10">
        <div className="grow rounded-md border-2 border-primary">
          <GuestPieChart />
        </div>
        <div className="rounded-md border-2 border-primary">
          <GuestBarChart />
        </div>
      </div>
    </div>
  );
}

export default GuestDetail;

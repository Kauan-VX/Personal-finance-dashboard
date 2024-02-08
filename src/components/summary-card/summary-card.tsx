import { ISummaryCard } from "@/app/models/summary-card";
import { formatCurrency } from "@/app/utils/currency";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SummaryCard({
  title,
  component,
  total,
  percentage,
  text_percentage,
}: ISummaryCard) {
  return (
    <Card className="w-[350px] p-0">
      <CardHeader>
        <CardTitle className="flex items-center justify-between mb-2">
          <span>{title}</span> <div>{component}</div>
        </CardTitle>
        <div className="flex flex-col gap-2 mt-12">
          <CardDescription>
            <b className="text-xl">{formatCurrency(total)}</b>
          </CardDescription>
          <CardDescription>
            {percentage}% {text_percentage}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

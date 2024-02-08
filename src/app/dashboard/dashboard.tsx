import { DatePickerWithRange } from "@/components/date-picker-range/date-picker-range";
import { SummaryCard } from "@/components/summary-card/summary-card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ISummaryCard } from "../models/summary-card";
import MovementTable from "./movement-table/movement-table";
import Overview from "./overview/overview";

export default function Dashboard() {
  const dataMonth: ISummaryCard[] = [
    {
      title: "Receitas totais",
      total: 20000,
      percentage: 21,
      text_percentage: "do mês passado",
    },
    {
      title: "Gastos totais",
      total: 3000,
      percentage: 50,
      text_percentage: "do mês passado",
    },
    {
      title: "Média geral",
      total: 21000,
      percentage: 50,
      text_percentage: "do mês passado",
    },
  ];

  return (
    <section className="w-full p-8">
      <header className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-4xl">Dashboard</h1>
        <DatePickerWithRange />
      </header>
      <div className="bg-slate-700 p-1 rounded-xl flex w-fit items-center my-4">
        <ToggleGroup type="single">
          <ToggleGroupItem value="general" aria-label="teste">
            Geral
          </ToggleGroupItem>
          <ToggleGroupItem value="cost" aria-label="teste">
            Adicionar gastos
          </ToggleGroupItem>
          <ToggleGroupItem value="gain" aria-label="teste">
            Adicionar ganhos
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        {dataMonth.map((data, index) => (
          <SummaryCard
            key={index}
            title={data.title}
            total={data.total}
            percentage={data.percentage}
            text_percentage={data.text_percentage}
          />
        ))}
      </div>
      <div className="mt-8 border border-[var(--background)] rounded-xl p-4">
        <Overview />
      </div>
      <div className="mt-8 border  border-[var(--background)] rounded-xl p-4">
        <MovementTable />
      </div>
    </section>
  );
}

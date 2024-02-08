import DatePickerRange from "@/components/date-picker-range/date-picker-range";
import SingleToggle from "@/components/single-toggle/single-toggle";
import MovementTable from "./movement-table/movement-table";
import Overview from "./overview/overview";

export default function Dashboard() {
  return (
    <section className="w-full p-8">
      <header className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-4xl">Dashboard</h1>
        <DatePickerRange />
      </header>
      <SingleToggle />

      <div className="mt-8 border border-white rounded-xl p-4">
        <Overview />
      </div>
      <div className="mt-8 border border-white rounded-xl p-4">
        <MovementTable />
      </div>
    </section>
  );
}

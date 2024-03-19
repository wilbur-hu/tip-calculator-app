import { cn } from "@/lib/utils.ts";
import InputPanel from "@/components/tips/InputPanel.tsx";
import ResultPanel from "@/components/tips/ResultPanel.tsx";
import { useState } from "react";

export type TipCalculatorProps = {
  className?: string;
};

const initState = {
  tipPerPerson: 0,
  totalPerPerson: 0,
};

export default function Calculator({ className }: TipCalculatorProps) {
  const [key, setKey] = useState(0);

  const [state, setState] = useState(initState);

  function reset() {
    console.log("reset");
    setKey((prev) => prev + 1);
    setState(initState);
  }

  function onValueChange(bill: number, percent: number, people: number) {
    console.log("onValueChange", bill, percent, people);

    const tipPerPerson = (bill * (percent / 100)) / people;
    const totalPerPerson = bill / people + tipPerPerson;
    setState({ tipPerPerson, totalPerPerson });
  }

  return (
    <div
      key={key}
      className={cn(
        "flex w-[375px] flex-col rounded-t-[25px] bg-white p-[32px] md:w-[920px] md:flex-row md:rounded-[25px] md:p-0",
        className,
      )}
    >
      <InputPanel
        className="md:ml-[48px] md:mt-[45px] md:w-[379px]"
        onValueChange={onValueChange}
      />
      <ResultPanel
        className="mt-[32px] md:m-[32px] md:ml-[48px] md:w-[413px] "
        tipPerPerson={state.tipPerPerson}
        totalPerPerson={state.totalPerPerson}
        onReset={reset}
      />
    </div>
  );
}

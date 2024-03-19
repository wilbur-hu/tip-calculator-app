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
      className={cn("flex w-[920px] rounded-[25px] bg-white", className)}
    >
      <InputPanel
        className="ml-[48px] mt-[45px] w-[379px]"
        onValueChange={onValueChange}
      />
      <ResultPanel
        tipPerPerson={state.tipPerPerson}
        totalPerPerson={state.totalPerPerson}
        onReset={reset}
      />
    </div>
  );
}

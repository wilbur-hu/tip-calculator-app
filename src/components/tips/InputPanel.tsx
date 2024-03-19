import { cn } from "@/lib/utils.ts";
import { useState } from "react";
import NumberInput from "@/components/tips/NumberInput.tsx";
import PercentButtons from "@/components/tips/PercentButtons.tsx";
import iconDollar from "@/assets/images/icon-dollar.svg";
import iconPerson from "@/assets/images/icon-person.svg";

export type InputProps = {
  className?: string;
  onValueChange?: (amount: number, percent: number, people: number) => void;
};

export default function InputPanel(props: InputProps) {
  const { className, onValueChange } = props;
  const [state, setState] = useState({
    bill: 0,
    percent: 0,
    people: 1,
  });
  const [error, setError] = useState({
    people: "",
  });

  function onBillChange(bill: number) {
    setState((prev) => ({ ...prev, bill }));
    onValueChange?.(bill, state.percent, state.people);
  }

  function onPercentChange(percent: number) {
    setState((prev) => ({ ...prev, percent }));
    onValueChange?.(state.bill, percent, state.people);
  }

  function onPeopleChange(people: number) {
    setState((prev) => ({ ...prev, people }));

    if (people <= 0) {
      setError({ people: "Can't be zero" });
      return;
    }

    setError({ people: "" });
    onValueChange?.(state.bill, state.percent, people);
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <NumberInput
        onValueChange={onBillChange}
        label="Bill"
        icon={iconDollar}
        value={state.bill}
      />

      <PercentButtons className="mt-[40px]" onPercentChange={onPercentChange} />

      <NumberInput
        className="mb-[48px] mt-[40px]"
        label="Number of People"
        icon={iconPerson}
        error={error.people}
        onValueChange={onPeopleChange}
        value={state.people}
      />
    </div>
  );
}

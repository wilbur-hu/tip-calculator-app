import { cn } from "@/lib/utils.ts";

export type ResultPanelProps = {
  className?: string;
  tipPerPerson: number;
  totalPerPerson: number;
  onReset?: () => void;
};

export default function ResultPanel({
  className,
  tipPerPerson,
  totalPerPerson,
  onReset,
}: ResultPanelProps) {
  return (
    <div
      className={cn(
        "m-[32px] ml-[48px] flex w-[413px] flex-col items-stretch rounded-[15px] bg-very-dark-cyan p-[40px] ",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[16px] font-bold leading-[24px] text-white">
            Tip Amount
          </span>
          <span className="text-grayish-cyan text-[13px] font-bold leading-[19px]">
            / person
          </span>
        </div>

        <span className="text-[48px] font-bold leading-[71px] tracking-[-1px] text-strong-cyan">
          ${tipPerPerson.toFixed(2)}
        </span>
      </div>

      <div className="mt-[25px] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[16px] font-bold leading-[24px] text-white">
            Total
          </span>
          <span className="text-grayish-cyan text-[13px] font-bold leading-[19px]">
            / person
          </span>
        </div>

        <span className="text-[48px] font-bold leading-[71px] tracking-[-1px] text-strong-cyan">
          ${totalPerPerson.toFixed(2)}
        </span>
      </div>

      <button
        className="mt-[122px] h-[48px] rounded-[5px] bg-strong-cyan text-[20px] font-bold uppercase leading-[30px] text-very-dark-cyan"
        onClick={onReset}
      >
        reset
      </button>
    </div>
  );
}

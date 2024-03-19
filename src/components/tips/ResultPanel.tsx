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
        "flex flex-col items-stretch rounded-[15px] bg-very-dark-cyan p-[40px]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[16px] font-bold leading-[24px] text-white">
            Tip Amount
          </span>
          <span className="text-[13px] font-bold leading-[19px] text-grayish-cyan">
            / person
          </span>
        </div>

        <span className="text-[32px] font-bold leading-[71px] tracking-[-0.67px] text-strong-cyan md:text-[48px] md:tracking-[-1px]">
          ${tipPerPerson.toFixed(2)}
        </span>
      </div>

      <div className="mt-[25px] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[16px] font-bold leading-[24px] text-white">
            Total
          </span>
          <span className="text-[13px] font-bold leading-[19px] text-grayish-cyan">
            / person
          </span>
        </div>

        <span className="text-[32px] font-bold leading-[71px] tracking-[-0.67px] text-strong-cyan md:text-[48px] md:tracking-[-1px]">
          ${totalPerPerson.toFixed(2)}
        </span>
      </div>

      <button
        className="mt-[32px] h-[48px] rounded-[5px] bg-strong-cyan text-[20px] font-bold uppercase leading-[30px] text-very-dark-cyan md:mt-[122px]"
        onClick={onReset}
      >
        reset
      </button>
    </div>
  );
}

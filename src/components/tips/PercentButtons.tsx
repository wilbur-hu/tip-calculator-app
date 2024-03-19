import { cn } from "@/lib/utils.ts";
import { useState } from "react";

export type PercentButtonsProps = {
  className?: string;
  onPercentChange?: (percent: number) => void;
};

function PercentButton({
  className,
  value,
  checked,
  onClick,
}: {
  className: string;
  value: number;
  checked?: boolean;
  onClick: () => void;
}) {
  const checkedClass = {
    "bg-strong-cyan text-very-dark-cyan": checked,
  };

  return (
    <button
      className={cn(
        "rounded-[5px] bg-very-dark-cyan text-[24px] font-bold leading-[36px] text-white checked:bg-strong-cyan checked:text-very-dark-cyan",
        checkedClass,
        className,
      )}
      onClick={onClick}
    >
      {value}%
    </button>
  );
}

export default function PercentButtons({
  className,
  onPercentChange,
}: PercentButtonsProps) {
  const percentValues = [5, 10, 15, 25, 50];
  const [selectedPercent, setSelectedPercent] = useState(0);
  const [customPercent, setCustomPercent] = useState(0);

  return (
    <div className={cn(className)}>
      <label
        className={
          "text-[16px] font-bold leading-[24px] text-dark-grayish-cyan"
        }
      >
        Select Tip %
      </label>
      <div
        className={cn(
          "mt-[16px] grid grid-cols-2 grid-rows-3 gap-x-[14px] gap-y-[16px] md:grid-cols-3 md:grid-rows-2",
        )}
      >
        {percentValues.map((percent) => (
          <PercentButton
            key={percent}
            checked={selectedPercent === percent}
            value={percent}
            onClick={() => {
              setSelectedPercent(percent);
              onPercentChange?.(percent);
            }}
            className="h-[48px]"
          />
        ))}

        <input
          type="number"
          placeholder="Custom"
          onChange={(e) => {
            setCustomPercent(parseFloat(e.target.value));
            setSelectedPercent(0);
            onPercentChange?.(customPercent);
          }}
          className="rounded-[5px] border-2 border-solid border-transparent bg-very-light-grayish-cyan pr-[4px] text-right text-[24px]
        font-bold leading-[36px]  text-very-dark-cyan outline-none placeholder:text-center placeholder:text-[#547878] focus:border-strong-cyan"
        />
      </div>
    </div>
  );
}

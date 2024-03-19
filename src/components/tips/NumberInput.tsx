import { cn } from "@/lib/utils";

export type NumberInputProps = {
  className?: string;
  icon?: string;
  label?: string;
  value: number;
  error?: string;
  onValueChange?: (amount: number) => void;
};

export default function NumberInput({
  className,
  icon,
  label,
  value,
  error,
  onValueChange,
}: NumberInputProps) {
  const inputBorderClass = {
    "border-transparent": !error,
    "border-[#E17457]": error,
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex">
        <label
          htmlFor="bill"
          className="text-[16px] font-bold leading-[24px] text-dark-grayish-cyan"
        >
          {label}
        </label>

        {error && (
          <span className="ml-auto text-[16px] font-bold leading-[24px] text-[#E17457]">
            {error}
          </span>
        )}
      </div>

      <div
        className={cn(
          "mt-[6px] flex h-[48px] items-center rounded-[5px] border-2 border-solid bg-very-light-grayish-cyan",
          "focus-within:border-strong-cyan",
          inputBorderClass,
        )}
      >
        <img
          src={icon}
          alt="input icon"
          className="ml-[19.26px] shrink-0 object-contain"
        />

        <div className="mr-[17px] grow">
          <input
            id="bill"
            type="number"
            placeholder="0"
            value={value}
            className={cn(
              "w-full bg-transparent text-right text-[24px] font-bold leading-[36px] text-very-dark-cyan outline-none",
            )}
            onChange={(e) => {
              onValueChange?.(parseFloat(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

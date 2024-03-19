import logo from "@assets/images/logo.svg";
import Calculator from "@/components/tips/Calculator.tsx";

function App() {
  return (
    <div className="flex min-h-[1024px] w-[1440px] flex-col items-center font-space-mono">
      <h1 className="mt-[163px] text-center">
        <img src={logo} alt="logo" className="object-contain" />
      </h1>

      <Calculator className="mt-[87.66px]" />
    </div>
  );
}

export default App;

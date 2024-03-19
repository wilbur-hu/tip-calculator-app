import logo from "@assets/images/logo.svg";
import Calculator from "@/components/tips/Calculator.tsx";

function App() {
  return (
    <div className="flex flex-col items-center justify-center font-space-mono">
      <h1 className="mt-[50px] text-center md:mt-0">
        <img src={logo} alt="logo" className="object-contain" />
      </h1>

      <Calculator className="mt-[87.66px]" />
    </div>
  );
}

export default App;

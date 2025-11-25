import Button1 from "@/components/Button1";
import Button10 from "@/components/Button10";
import Button11 from "@/components/Button11";
import Button12 from "@/components/Button12";
import Button13 from "@/components/Button13";
import Button14 from "@/components/Button14";
import Button15 from "@/components/Button15";
import Button16 from "@/components/Button16";
import Button2 from "@/components/Button2";
import Button3 from "@/components/Button3";
import Button4 from "@/components/Button4";
import Button5 from "@/components/Button5";
import Button6 from "@/components/Button6";
import Button7 from "@/components/Button7";
import Button8 from "@/components/Button8";
import Button17 from "@/components/Button17";
import Button9 from "@/components/Button9";
import Image from "next/image";
import Button18 from "@/components/Button18";
import Button19 from "@/components/Button19";
import Button20 from "@/components/Button20";

export default function Home() {
  return (
    <div className="w-full h-screen bg-zinc-200 font-bold">
      <div className="max-w-7xl h-screen mx-auto flex items-center justify-center gap-8 flex-wrap border-x border-zinc-500">
        <Button1>Button</Button1>
        <Button2 secondText="Explore">Hover</Button2>
        <Button3>Button</Button3>
        <Button4>Button</Button4>
        <Button5>Button</Button5>
        <Button6>Button</Button6>
        <Button7>Button</Button7>
        <Button8>Button</Button8>
        <Button9>Button</Button9>
        <Button10>Button</Button10>
        <Button11>M</Button11>
        <Button12 blobColor="bg-blue-500">Button</Button12>
        <Button13>Button</Button13>
        <Button14>Button</Button14>
        <Button15>Button</Button15>
        <Button16 secondName="Hello"></Button16>
        <Button17></Button17>
        <Button18></Button18>
        <Button19></Button19>
        <Button20></Button20>
      </div>
    </div>
  );
}

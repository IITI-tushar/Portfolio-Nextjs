import dynamic from "next/dynamic";

const BentoGrid = dynamic(
  () => import("./BentoGrid").then((mod) => mod.BentoGrid),
  {
    ssr: false,
  }
);

export function BentoGridWrapper() {
  return <BentoGrid />;
}

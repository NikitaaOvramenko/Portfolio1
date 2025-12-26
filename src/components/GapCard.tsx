interface GapCardProps {
  height: number;
}
export default function GapCard({ height }: GapCardProps) {
  return <div className="gap-card" style={{ height: `${height}px` }}></div>;
}

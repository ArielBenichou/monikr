export default function Card({ children }: Props) {
  return (
    <div className="flexbox max-w-sm gap-4 p-4 border-3 rounded-lg">
      {children}
    </div>
  );
}

interface Props {
  children: React.ReactNode;
}

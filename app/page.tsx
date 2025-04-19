import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center">
      <Container />
      <img src="/cat.gif" alt="gif of a cat walking" className="w-60" />
    </div>
  );
}

import Hello from "./commponents/hello";
export default function Home() {
  console.log("beckend messages");
  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        Wellcom the my first next porject
      </h1>
      <Hello />
    </>
  );
}

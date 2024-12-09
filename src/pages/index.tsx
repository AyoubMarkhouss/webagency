import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#f5efe9]">
      <Navbar />
      <div className="min-h-screen ">
        <div className="flex justify-center items-center h-96">
          <h1 className="fontmed text-9xl text-red-600">Declic Agency</h1>
        </div>
      </div>
      <div className="h-screen">
        <h1>test</h1>
      </div>
    </div>
  );
}

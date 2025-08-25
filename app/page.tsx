import AuthButton from "./components/AuthButton";

export default function Home() {
  return (
    <>
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Stories</h1>
        <AuthButton />
      </header>

      <main className="w-full flex flex-col gap-4 mt-4">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Section 1</h2>
          <p className="text-gray-700">This is some content for section 1.</p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Section 2</h2>
          <p className="text-gray-700">This is some content for section 2.</p>
        </section>
      </main>
    </>
  );
}

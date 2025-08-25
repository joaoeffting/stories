import AuthButton from "./components/AuthButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Stories</h1>
        <AuthButton />
      </header>

      {/* Main Content */}
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

      {/* Footer */}
      <footer className="w-full mt-auto bg-white p-4 text-center text-gray-500">
        &copy; 2025 Stories
      </footer>
    </div>
  );
}

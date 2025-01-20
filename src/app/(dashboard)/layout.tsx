function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-4xl bg-red-500">dashboard root </h1>
      {children}
    </div>
  );
}

export default layout;

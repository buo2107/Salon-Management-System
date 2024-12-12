function Heading({ children }) {
  return (
    <div className="mb-10 flex flex-row pt-5">
      <h1 className="text-3xl font-semibold tracking-widest">{children}</h1>
    </div>
  );
}

export default Heading;

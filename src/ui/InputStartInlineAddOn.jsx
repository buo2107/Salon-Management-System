function InputStartInlineAddOn({ children }) {
  return (
    <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
      {children}
    </span>
  );
}

export default InputStartInlineAddOn;

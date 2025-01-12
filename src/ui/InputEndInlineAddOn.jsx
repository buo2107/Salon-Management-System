function InputEndInlineAddOn({ children }) {
  return (
    <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
      {children}
    </span>
  );
}

export default InputEndInlineAddOn;

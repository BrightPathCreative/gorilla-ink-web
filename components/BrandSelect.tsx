"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export type BrandSelectOption = { value: string; label: string };

type BrandSelectProps = {
  name: string;
  options: readonly BrandSelectOption[];
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  /** Shown when `required` and submit attempted with empty value */
  error?: string;
  onValueChange?: (value: string) => void;
};

export function BrandSelect({
  name,
  options,
  defaultValue = "",
  placeholder = "Select…",
  required,
  error,
  onValueChange,
}: BrandSelectProps) {
  const id = useId();
  const listId = `${id}-listbox`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const selected = options.find((o) => o.value === value);
  const displayLabel = selected?.label ?? "";
  const showPlaceholder = !selected && (value === "" || !value);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function handlePointer(e: MouseEvent | TouchEvent) {
      if (!containerRef.current?.contains(e.target as Node)) close();
    }
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  function selectOption(next: string) {
    setValue(next);
    onValueChange?.(next);
    close();
  }

  return (
    <div ref={containerRef} className="relative mt-1.5">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={`${id}-trigger`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={Boolean(error)}
        aria-required={required}
        aria-describedby={error ? `${id}-err` : undefined}
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between gap-2 rounded border bg-black/60 px-3 py-2.5 text-left font-sans text-sm text-white outline-none transition focus-visible:ring-2 focus-visible:ring-gorilla-blue ${
          error ? "border-gorilla-pink/70" : "border-white/15"
        } ${open ? "border-gorilla-blue/60 ring-1 ring-gorilla-blue/40" : ""}`}
      >
        <span className={showPlaceholder ? "text-white/40" : undefined}>
          {showPlaceholder ? placeholder : displayLabel}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gorilla-yellow transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={`${id}-trigger`}
          className="absolute z-[100] mt-1 max-h-60 w-full overflow-y-auto rounded border border-gorilla-blue/45 bg-[#0a0a0a]/98 py-1 font-sans text-sm shadow-[0_0_24px_rgba(0,0,255,0.35),0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-md"
        >
          {options.map((opt) => {
            const isSelected = value === opt.value;
            return (
              <li key={opt.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectOption(opt.value)}
                  className={`flex w-full items-center px-3 py-2.5 text-left text-white transition hover:bg-gorilla-blue/20 hover:text-gorilla-yellow ${
                    isSelected ? "bg-gorilla-blue/15 text-gorilla-yellow" : ""
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {error ? (
        <p id={`${id}-err`} className="mt-1 text-xs text-gorilla-pink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

import React from "react";
import { useColors } from "./ColorProvider";
import { useInput } from "./hooks";

export default function AddColorForm() {
  const [titleProps, resetValue] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { createColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    createColor(titleProps.value, colorProps.value);
    resetValue();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}

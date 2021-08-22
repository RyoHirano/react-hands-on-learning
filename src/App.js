import { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

function App() {
  const [colors, setColors] = useState(colorData);

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => alert(`TODO: Create ${title} - ${color}`)}
      />
      <ColorList
        colors={colors}
        onRateColor={rateColor}
        onRemoveColor={removeColor}
      />
    </>
  );
}

export default App;

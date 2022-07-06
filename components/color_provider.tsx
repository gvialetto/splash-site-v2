import React, { ReactNode, createContext, useState } from "react";

type colorClass = [bg: string, text: string];

const defaultColorClass: colorClass = ["bg-fuchsia-500", "text-fuchsia-500"]
const colorClasses = new Map<string, colorClass>([
  ["red", ["bg-red-500", "text-red-500"]],
  ["blue", ["bg-blue-400", "text-blue-400"]],
  ["green", ["bg-green-600", "text-green-600"]],
  ["purple", ["bg-purple-600", "text-purple-600"]],
  ["yellow", ["bg-yellow-500", "text-yellow-500"]],
]);

const colorClassWithDefault = (name: string): colorClass => {
  return colorClasses.get(name) ?? defaultColorClass;
}

export const getBGColor = (name: string): string => {
  return colorClassWithDefault(name)[0];
};

export const getTextColor = (name: string): string => {
  return colorClassWithDefault(name)[1];
};

export const [defaultColor] = colorClasses.keys();

type Props = {
  children?: ReactNode;
};

type ColorContextType = {
  color: string;
  setRandomColor: () => void;
};

const colorContext = createContext<ColorContextType | undefined>(undefined);

const randomSuffix = (previousColors: string[]): string => {
  const availableColors = [...colorClasses.keys()].filter(
    (suffix) => !previousColors.includes(suffix)
  );
  const randomPos = Math.floor(Math.random() * availableColors.length);
  return availableColors[randomPos];
};

export const useColor = (): ColorContextType | undefined =>
  React.useContext(colorContext);

export const ColorProvider = ({ children }: Props): JSX.Element => {
  const [previousColors, setPreviousColors] = useState<string[]>([]);
  const [color, setColor] = useState(defaultColor);

  const setRandomColor = () => {
    previousColors.unshift(color);
    const newSuffixes = previousColors.slice(0, 1);
    setPreviousColors(newSuffixes);
    setColor(randomSuffix(previousColors));
  };

  return (
    <colorContext.Provider value={{ color, setRandomColor }}>
      {children}
    </colorContext.Provider>
  );
};

export default ColorProvider;

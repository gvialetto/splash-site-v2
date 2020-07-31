import React, { ReactNode, createContext, useState } from "react";

const colorClassSuffixes = [
  "red-500",
  "blue-500",
  "green-600",
  "purple-500",
  "teal-400",
  "orange-400",
];

export const defaultColorClassSuffix = colorClassSuffixes[0];

type Props = {
  children?: ReactNode;
};

type ColorContextType = {
  colorClassSuffix: string;
  setRandomClassSuffix: () => void;
};

const colorClassSuffixContext = createContext<ColorContextType | undefined>(
  undefined
);

const randomSuffix = (previousSuffixes: string[]): string => {
  const availableSuffixes = colorClassSuffixes.filter(
    (suffix) => !previousSuffixes.includes(suffix)
  );
  const randomPos = Math.floor(Math.random() * availableSuffixes.length);
  return availableSuffixes[randomPos];
};

export const useColorClassSuffix = (): ColorContextType | undefined =>
  React.useContext(colorClassSuffixContext);

export const ColorClassSuffixProvider = ({ children }: Props): JSX.Element => {
  const [previousClassSuffixes, setPreviousClassSuffixes] = useState<string[]>([])
  const [colorClassSuffix, setColorClassSuffix] = useState(
    defaultColorClassSuffix
  );

  const setRandomClassSuffix = () => {
    previousClassSuffixes.unshift(colorClassSuffix)
    var newSuffixes = previousClassSuffixes.slice(0, 1)
    setPreviousClassSuffixes(newSuffixes)
    setColorClassSuffix(randomSuffix(previousClassSuffixes));
  };

  return (
    <colorClassSuffixContext.Provider
      value={{ colorClassSuffix, setRandomClassSuffix }}
    >
      {children}
    </colorClassSuffixContext.Provider>
  );
};

export default ColorClassSuffixProvider;

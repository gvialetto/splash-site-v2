import { useColorClassSuffix } from "components/color_provider";

const Quote = (): JSX.Element => {
  const { colorClassSuffix } = useColorClassSuffix()!;

  const classes = `transition ease-in duration-300 text-${colorClassSuffix}`;

  return (
    <div className="mt-6 font-sans text-xl leading-relaxed text-center xl:pl-32 xl:pr-32">
      <blockquote cite="https://en.wikipedia.org/wiki/Competent_man">
        A human being should be able to change a diaper, plan an invasion,
        butcher a hog, conn a ship, design a building, write a sonnet, balance
        accounts, build a wall, set a bone, comfort the dying, take orders, give
        orders, cooperate, act alone, solve equations, analyze a new problem,
        pitch manure, program a computer, cook a tasty meal, fight efficiently,
        die gallantly.
        <strong className={classes}> Specialization is for insects</strong>.
      </blockquote>
      <em className="text-gray-500">
        -- &nbsp;
        <a href="http://en.wikipedia.org/wiki/Robert_A._Heinlein">
          Robert A. Heinlein
        </a>
      </em>
    </div>
  );
};

export default Quote;

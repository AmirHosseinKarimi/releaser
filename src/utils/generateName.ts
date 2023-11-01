import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";

const generateName = () => {
  return uniqueNamesGenerator({
    dictionaries: [colors, animals],
    separator: " ",
    style: "capital",
  });
};

export default generateName;

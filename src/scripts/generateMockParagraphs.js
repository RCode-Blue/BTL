import { LoremIpsum } from "lorem-ipsum";

const generateMockParagraphs = (settings, qty) => {
  // console.log(settings);
  // console.log(qty.noOfParagraphs);
  const lorem = new LoremIpsum(settings);
  let paragraphs = [];
  for (let i = 1; i <= qty; i++) {
    paragraphs.push({
      key: i,
      text: lorem.generateParagraphs(1),
    });
  }
  return paragraphs;
};

export default generateMockParagraphs;

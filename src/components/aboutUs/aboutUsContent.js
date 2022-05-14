import React, { Fragment } from "react";
import generateMockParagraphs from "../../scripts/generateMockParagraphs";

const loremIpsumSettings = {
  sentencesPerParagraph: {
    max: 10,
    min: 4,
  },
  wordsPerSentence: {
    max: 24,
    min: 10,
  },
};

const AboutUsContent = (noOfParagraphs) => {
  const generateLorem = (qty) => {
    let paragraphs = generateMockParagraphs(
      loremIpsumSettings,
      qty.noOfParagraphs
    );
    return paragraphs.map((paragraph) => {
      return (
        <p className="aboutus-content__paragraph" key={paragraph.key}>
          {paragraph.text}
        </p>
      );
    });
  };

  return (
    <article className="aboutus-content">
      {generateLorem(noOfParagraphs)}
    </article>
  );
};

export default AboutUsContent;

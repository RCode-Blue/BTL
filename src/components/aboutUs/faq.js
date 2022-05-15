/**
 * @description Component for the "FAQ" section
 *
 * @namespace Faq
 * @memberof Apps.component.AboutUs.AboutUsPage
 */
import React from "react";
import generateMockParagraphs from "../../scripts/generateMockParagraphs";
import { SectionHeaderDark } from "../_reusables/contentSection/sectionHeader";

const loremIpsumSettings = {
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 10,
    min: 6,
  },
};

const generateLorem = (qty) => {
  let paragraphs = generateMockParagraphs(
    loremIpsumSettings,
    qty.noOfParagraphs
  );

  return paragraphs.map((paragraph) => {
    return (
      <p
        className="aboutus-content__paragraph section-content section-content__dark"
        key={paragraph.key}
      >
        {paragraph.text}
      </p>
    );
  });
};

const Faq = (noOfParagraphs) => {
  const headerText = "Frequently Asked Questions";

  return (
    <div id="faq">
      <SectionHeaderDark text={headerText} />
      {generateLorem(noOfParagraphs)}
    </div>
  );
};

export default Faq;

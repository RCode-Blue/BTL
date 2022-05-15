/**
 * @description Component for the "Privacy Policies" section
 *
 * @namespace PrivacyPolicies
 * @memberof Apps.component.AboutUs.AboutUsPage
 */
import React from "react";
import generateMockParagraphs from "../../scripts/generateMockParagraphs";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

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
        className="aboutus-content__paragraph section-content section-content__light"
        key={paragraph.key}
      >
        {paragraph.text}
      </p>
    );
  });
};

const PrivacyPolicies = (noOfParagraphs) => {
  return (
    <section id="privacypolicies">
      <SectionHeaderLight text="Privacy policies" />
      {generateLorem(noOfParagraphs)}
    </section>
  );
};

export default PrivacyPolicies;

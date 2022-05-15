/**
 * @description Mockup component for 'Our Tools' section
 *
 * @namespace OurToolsContents
 * @memberof App.components.Home.HomeContents.OurToolsSection
 */
import React, { Fragment } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";

import fetchOurTools from "../../queries/fetchOurTools";

const mockTools = [
  {
    fileName: "hammer",
    imgAlt: "hammer",
    title: "Hammer",
    description: "De Walt 20oz Solid Claw hammer blk",
    ratePerDay: "1",
    availablilty: true,
  },
  {
    fileName: "lawnmower",
    imgAlt: "lawnmower",
    title: "Lawn Mower",
    description: "Victa twin 18V Mightycut Lawnmower",
    ratePerDay: "5",
    availablilty: true,
  },
  {
    fileName: "powersaw",
    imgAlt: "power saw",
    title: "Power Saw",
    description: "DeWalt 1200W 185mm Circular Saw",
    ratePerDay: "8",
    availablilty: false,
  },
  {
    fileName: "tent",
    imgAlt: "tent",
    title: "Tent",
    description: "Weisshorn Camping Tent 2-4 Person",
    ratePerDay: "4",
    availablilty: false,
  },
  {
    fileName: "wheelbarrow",
    imgAlt: "wheelbarrow",
    title: "Wheelbarrow",
    description: "Saxon 100L Poly Tray Wheelbarrow",
    ratePerDay: "2",
    availablilty: true,
  },
  {
    fileName: "wheelchair",
    imgAlt: "wheelchair",
    title: "Wheelchair",
    description: "Deluxe Wheelchair Height Adjustable",
    ratePerDay: "10",
    availablilty: true,
  },
];

const sliderSettings = {
  dots: true,
  className: "ourtools-slider",
  dotsClass: "ourtools-dots",
  arrows: false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: false,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const OurToolsMockup = () => {
  const ourToolsImages = fetchOurTools().edges;

  const renderOurTools = (mockTools) => {
    return (
      <ul className="ourtools-wrapper">
        <Slider {...sliderSettings}>
          {mockTools.map((mockTool) => {
            let mockToolName = mockTool.fileName;

            let foundTool = ourToolsImages.find(
              (ourToolImage) => ourToolImage.node.name === mockToolName
            );
            const { imgAlt, description, title, ratePerDay, availablilty } =
              mockTool;
            const { id, name, childImageSharp } = foundTool.node;
            const image = getImage(childImageSharp.gatsbyImageData);
            return (
              <li className="ourtools-box" key={id}>
                <figure>
                  <GatsbyImage image={image} alt={imgAlt} />
                  <dl className="ourtools-description">
                    <dl className="ourtools-description__title">
                      <dt>{title}</dt>
                      <dd>{description}</dd>
                    </dl>
                    <dl className="ourtools-description__rate">
                      <dt>Rate:</dt>
                      <dd>${ratePerDay} per day</dd>
                    </dl>
                    <dl className="ourtools-description__available">
                      <dt>Available?</dt>
                      <dd>{availablilty ? "yes" : "no"}</dd>
                    </dl>
                  </dl>
                </figure>
              </li>
            );
          })}
        </Slider>
      </ul>
    );
  };

  renderOurTools(mockTools);

  return <Fragment>{renderOurTools(mockTools)}</Fragment>;
};

export default OurToolsMockup;

export const Hero_Content_Query = `
   	 heroContent: heroContentComponent {
        title
        boldContent
        content
        buttonText
        buttonType
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
        buttonUrl
        circleImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        heroImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Services_Query = `
   	 services: servicesComponent {
        title
        content
        services {
            title
            icon {
                node {
                    sourceUrl
                    altText
                    mediaDetails {
                        width
                        height
                    }
                }
            }
        }
        howToWorkTitle
        stepOneBold
        stepOneContent
        stepTwoBold
        stepTwoContent
        stepThreeBold
        stepThreeContent
        buttonText
        buttonType
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
        buttonUrl
        bottomImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

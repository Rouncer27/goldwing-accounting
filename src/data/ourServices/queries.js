export const Icon_Items_Query = `
   	iconItems: iconItemsComponent {
        intro
        items {
            title
            content 
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
    }
`;

export const Steps_Query = `
   	 steps: stepsComponent {
        howtoworktitle
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
    }
`;

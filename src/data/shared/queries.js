export const Page_Hero_Query = `
    pageHero: pageHeroComponent {
        centreContent
        contentAtTop
        mainTitle
        contentRequired
        content
        button
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
        image {
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

export const Page_Hero_Small_Query = `
    pageHeroSmall: pageHeroSmallComponent {
        title
        image {
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

export const Latest_Article_Query = `
   	latestArticle: latestArticleComponent {
       displayLatestArticle
    }
`;

export const Testimonials_Query = `
   	 testimonials: testimonialsComponent {
       displayTestimonials
       title
       image {
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

export const Steps_Query = `
   	 steps: stepsComponent {
        howtoworktitle
        stepOneBold
        stepOneContent
        stepTwoBold
        stepTwoContent
        stepThreeBold
        stepThreeContent
        buttonRequired
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
        backgroundColour
    }
`;

export const Simple_Content_Query = `
   	simpleContent: simpleContentComponent {
        content
    }
`;

export const Page_Hero_Query = `
    pageHero: pageHeroComponent {
        centreContent
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

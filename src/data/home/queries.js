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

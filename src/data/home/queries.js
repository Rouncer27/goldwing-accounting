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

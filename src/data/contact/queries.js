export const Hero_Content_Small_Query = `
   	 heroContentSmall: heroContentSmallComponent {
       title
       content
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

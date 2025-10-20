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

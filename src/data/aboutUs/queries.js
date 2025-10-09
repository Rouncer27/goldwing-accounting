export const Content_Points_Query = `
   	 contentPoints: contentPointsComponent {
        titleLeft
        contentLeft
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
        secondButtonRequired
        sectionButtonText
        secondButtonType
        secondButtonLink {
            edges {
                node {
                    uri
                }
            }
        }
        secondButtonUrl
        rightTitle
        points {
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

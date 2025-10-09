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

export const Hero_Intro_Query = `
   	 heroIntro: heroIntroComponent {
        title
        team {
            name
            content
            buttonText
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

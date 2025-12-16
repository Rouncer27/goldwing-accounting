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

export const Content_Image_Query = `
   	 contentImage: contentImageComponent {
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

export const Hero_Callout_Query = `
   	 heroCallout: heroCalloutComponent {
        title
        content
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
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

export const Faqs_Query = `
   	faqs: faqsComponent {
        sections {
            sectionTitle
            category {
            categoryTitle
                questions {
                    question
                    answer
                }
            }
        }
    }
`;

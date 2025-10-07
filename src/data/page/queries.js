export const Page_Seo_Query = `
   	seoMetaTags {
        seoMetaInformation {
            metaDescription
            metaTitle
            metaImage {
                node {
                    altText
                    sourceUrl
                }
            }
        }
    }
`;

export const Default_Page_Hero_Query = `
   	siteWideSettings {
        defaultHeader {
            defaultPageHero {
                node {
                    altText
                    sourceUrl
                }
            }
        }
    }
`;

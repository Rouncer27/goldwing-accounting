export const Header_Menu_Query = `
     menuTop: menu(id: "Header Menu", idType: NAME) {
        menuItems(first: 99999) {
            nodes {
                label
                uri
                parentId
                cssClasses
                childItems {
                    nodes {
                        label
                        uri
                    }
                }
            }
        }
    }
`;

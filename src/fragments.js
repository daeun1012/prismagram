export const USER_FRAGMENT = `
    fragment UserParts on User {
        id
        username
        email
        bio
        posts {
            id
            caption
        }
    }
`;
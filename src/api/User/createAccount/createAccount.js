import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async(_, args, {prisma}) => {
            const { username, email, bio = ""} = args;
            const user = await prisma.createUser({username, email, bio});
            return user;
        }
    }
};
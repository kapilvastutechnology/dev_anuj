import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
        providers:[
            GitHubProvider({
                clientId: "Ov23lixXSCevktS71Xp3",
                clientSecret: "f659ce015add15b528fb7490686237f355e1b4de"
            }),
        ],
    };


export default NextAuth(authOptions);


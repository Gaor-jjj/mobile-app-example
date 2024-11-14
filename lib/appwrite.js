import { Client, Account, ID, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.example.mobile_app_example',
    projectId: '67363319003b8609e7c7',
    databaseId: '67363840002ccd2470ee',
    userCollectionId: '673638700012f68f474b',
    productCollectionId: '673638f800134d1fc670',
    storageId: ''
}

const client = new Client();
client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
    try {
        const newAccount = await account.create(
            ID.unique,
            email,
            password,
            username
        )
        if(!newAccount) throw Error;

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
            }
        );
        return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}

export async function signOut() {
    try {
        const session  = await account.deleteSession('current');

        return session;
    } catch (error) {
        throw new Error(error)
    }
}
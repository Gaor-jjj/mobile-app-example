import { Client, Account, ID, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.example.mobile_app_example',
    projectId: '67363319003b8609e7c7',
    databaseId: '6736d060003434edd290',
    userCollectionId: '6736d0c40036f76f44d4'
}

const client = new Client();
client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
    console.log('Database ID:', config.databaseId);
    console.log('User Collection ID:', config.userCollectionId);
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
                email: email,
                username: username
            }
        );
        return newUser;

    } catch (error) {
        return null
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
        return null
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
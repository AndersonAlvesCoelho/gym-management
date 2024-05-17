import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveStoreAuth(data: any): Promise<boolean> {
  try {
    const { access_token, client } = data;
    await AsyncStorage.setItem('@app-token', access_token);
    await AsyncStorage.setItem('@app-user', JSON.stringify(client));
    return true;
  } catch (e) {
    return false;
  }
}

async function saveStoreUser(data: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem('@app-user', JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}

async function getStoreUser(): Promise<any | null> {
  try {
    const result = await AsyncStorage.getItem('@app-user');
    const user: any | null = result ? JSON.parse(result) : null;
    return user;
  } catch (e) {
    return null;
  }
}

async function getToken(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem('@app-token');
  } catch (e) {
    return null;
  }
}

async function clearStoreAuth(): Promise<boolean> {
  try {
    await AsyncStorage.removeItem('@app-user');
    await AsyncStorage.removeItem('@app-token');
    return true;
  } catch (e) {
    return false;
  }
}

export { clearStoreAuth, getStoreUser, getToken, saveStoreAuth, saveStoreUser };


import config from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  // account = new Account(client);
  account;
  // * we can passed account as mentioned in documentation of appwrite but it is wastage of resources ,whenever some one is creating an object then account will be created hence when someone is creating an object then parent class constructor will be called first hence we create account in Authservice constructor;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your API Endpoint
      .setProject(config.appwriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;

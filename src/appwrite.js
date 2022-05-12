import { Appwrite } from "appwrite";

const server = {
  endpoint: "http://127.0.0.1/v1",
  project: "project-devtohack",
  collection: "pastess",
};

const sdk = new Appwrite();

sdk.setEndpoint(server.endpoint).setProject(server.project);

export { sdk, server };

import { sdk, server } from "../appwrite";
import { Query } from "appwrite";

// create anonymous session
export const createAnonSession = () => {
  if (!localStorage.getItem("cookieFallback")) {
    let promise = sdk.account.createAnonymousSession();
    promise.then(
      function (response) {
        console.log(response); // Success
        localStorage.setItem("userid", response.userId);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  } else {
    console.log("Anon User");
  }
};

// create paste
export const createPaste = (title, text) => {
  const code = self.crypto.randomUUID();
  const promise = sdk.database.createDocument(server.collection, "unique()", {
    code: code,
    title: title.trim(),
    txt: text.trim(),
  });
  return promise;
};

// view paste
export const viewPaste = (id) => {
  const promise = sdk.database.getDocument(server.collection, id);
  return promise;
};

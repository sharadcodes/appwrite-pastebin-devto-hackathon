# DEV appwrite Hackathon project

## Anonymous PasteBin AKA AnonPaste

So I made this "AnonPaste" Anonymous PasteBin Project to test out the anonymous login functionality provided by `appwrite` and how it works behind the scenes.

The project is dead simple, it does following:

- As soon as you are on the create paste page you are automatically logged in using anonymous login.
- When you create a paste after providing `title` and `text` it saves and redirects the user to the `View Paste Page`.
- View Paste Page extracts the `ID` of the document AKA paste from the route and uses it to load the document AKA paste and show it to the user.

## Setup

- Clone repo.
- Install appwrite. Steps are at: https://appwrite.io/
- Cd to repo folder and `npm i`
- Open appwrite dashboard.
- Create a collection named `pastess` with following string fields:
  - `txt` size `10000`.
  - `title` & `code` with size `leave it as it is` LOL.
- Make sure anonymous login is enabled in settings of appwrite's dashboard.
- THE END

## Video Demo:

* https://youtu.be/9kno7tn_al4

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/9kno7tn_al4/0.jpg)](https://www.youtube.com/watch?v=9kno7tn_al4)

## Screenshots:

![Home](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t4384xtz96kkj9khelux.png)

![Create Paste Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8hs6l1hbdduiclvddv1s.png)

![View Paste Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ey0rui2nggiydgonmq3o.png)

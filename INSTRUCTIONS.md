# Instructions to run the project

## Requirements
- [NodeJS](https://nodejs.org/en)
- NPM
- [Android Studio](https://developer.android.com/studio?gclid%253DCjwKCAjwqZSlBhBwEiwAfoZUIGmgrG4LwsjLlVgX0V-_VvcPcGdOL6HERikYhENPJNez2bvpZj7AKBoCNMIQAvD_BwE%2526gclsrc%253Daw.ds)
- [GIT](https://git-scm.com/)

## Steps
1. Clone the repository
```
git clone https://github.com/diegodevdan/gendra-test.git
```
2. Go to the project folder
```cmd
cd gendra-test
```
3. Install dependencies
```bash
npm install
```

## Run on virtual device Android
1. Open Android Studio
2. Open the virtual device manager
3. Create a new virtual device and run it
4. Run the project
```cmd
npm run start -c
```
5. Into the terminal, press `"a"` to run the app on the virtual device

## Run on physical device Android
1. Install the Expo Go app on your device
2. Open the Expo Go app and press on the `"Scan QR Code"` button
3. At the terminal where the project runs, press `"c"` to show the QR code
4. Scan the QR code with the Expo Go app

## Run on physical device IOS
1. At the terminal where the project runs, press `"c"` to show the QR code
2. Open the Camera app on your device
3. Scan the QR code

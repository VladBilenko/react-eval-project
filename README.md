# JavaScript: React Evaluation Project

The purpose of this project is to allow us to evaluate your competency with `JavaScript` using React.  Your `JavaScript`, `HTML`, and `CSS` knowledge (not just your React) are very valuable to us when we make a decision on a possible future team member.

We would like you to create a mini data visualization app for a JavaScript hero, John David Dalton.  The app has had data prepopulated into it for John's GitHub info.

We dont want this to take over your life so work on it for about 4 - 8 hours and check in.

Feel free to contact us along the way with questions.

## Setup

1. Fork this project
2. Read the `package.json` to see how to run the project
3. The initial redux state is in the app

## Development

- Take the app and make it your own.  Feel free to throw away everything but the data.
- You have access to user, repo, and event data for John in the app state.
- There are a ton of ways you can visualize this, so get creative and have FUN.

## Tech we use

- D3 for data visualizations
- CSS and Greensock for animations

## Pre submission

- Add this project to **your** GitHub account and send us... actually go test it again and then send us the link
- Your project must pass the eslint provided in cc-react-scripts
- **Screenshot and include your main view in your email when you turn in your project**

### Remember this is your first impression with us :)

## Good luck and hope to see you soon


## Comments after finish

- To start project run `npm start` as always.
- You can find it on GitHub Pages: https://vladbilenko.github.io/react-eval-project/ , when I writing this, it have 404 request ;)
- I changed structure of project
- GitHub events have various data structure, that's why you can find `__getValueFromPayload` method in https://github.com/VladBilenko/react-eval-project/blob/master/src/models/event.model.js ;)
- If you think, that containers markup is redundant, it can be, but, to my opinion, it`s flexible
- I update state only at first call and don`t clear with componentWillUnmount, in real http requests it should be



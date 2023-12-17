# Habit Tracker App

The Habit Tracker App is a web application designed to help users manage and track their daily habits. Whether it's exercise, reading, or any other routine, this app provides a convenient way to monitor and stay on top of your habits.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Deployed Link](#deployed-link)

## Features

- **Week View:** Visualize your habits for the entire week.
- **Daily View:** View and manage habits for each day.
- **Add Habits:** Easily add new habits with name, time, and day.
- **Status Update:** Update the status of your habits (Done, Not done, None).

## Project Structure

```plaintext
habit-tracker-app
├── components
│   ├── App.js
│   ├── DailyBox.js
│   ├── NavBar.js
│   ├── WeekBox.js
│   └── index.js
├── pages
│   ├── AddHabits.js
│   ├── DayView.js
│   ├── WeekView.js
│   └── index.js
├── redux
│   ├── Reducer
│   │   ├── habits.js
│   │   ├── navReducer.js
│   │   └── index.js
│   ├── actions
│   │   ├── habits.js
│   │   ├── navActions.js
│   │   └── index.js
│   ├── store
│   │   └── store.js
├── styles
│   ├── AddHabits.module.css
│   ├── App.css
│   ├── DailyBox.module.css
│   ├── NavBar.module.css
│   ├── WeekBox.module.css
│   └── index.css
├── utils
│   └── handleDate.js
├── index.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

## Installation
1. Clone the repository
```cd
git clone https://github.com/gokuldevp/Habit-Tracker-Client.git
```

2. Install dependencies
```
cd habit-tracker-app
npm install
```

## Usage
1. Start the development serve
```
npm start
```
2. Open the application in your browser
```
http://localhost:3000
```

## Technologies Used
* React
* Redux
* React Router
* CSS Modules

## Deployed Link
Please find the deployed app [Habit Tracker React App](https://aesthetic-bavarois-de14d5.netlify.app)
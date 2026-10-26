# CST Tasks — Guided Debugging Exercise

A small to-do app used to practise debugging tools. It works, except for one
small bug you will find in Part 4. Follow the guided exercise handout.

```bash
npm install
npx expo start      # scan the QR code with Expo Go, then press j for DevTools
```

## Project structure

```
App.js                         state for tasks, filter and the new-task text
src/api/tasks.js               loads tasks from JSONPlaceholder
src/utils/stats.js             works out "X of Y done · N%"
src/utils/filter.js            All / Active / Done filter
src/components/StatsBar.js     the stats line and "Clear done"
src/components/AddTaskForm.js  text box and Add button
src/components/FilterBar.js    the three filter chips
src/components/TaskItem.js     one task row: tap to tick, ✕ to delete
```

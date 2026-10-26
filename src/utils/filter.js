// Returns the tasks to show for the chosen filter: 'All', 'Active' or 'Done'.
export function filterTasks(tasks, filter) {
  if (filter === 'Active') {
    return tasks.filter((task) => !task.done);
  }
  if (filter === 'Done') {
    return tasks.filter((task) => task.done);
  }
  return tasks;
}

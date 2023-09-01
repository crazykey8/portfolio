export function defineProject() {
  window[Symbol('project-url')] = process.env.PROJECT_URL
}

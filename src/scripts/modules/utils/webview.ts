export function isWebview() {
  if (new URL(document.location.href).searchParams.get('webview') ?? false) {
    document.body.classList.add('webview')
  }
}

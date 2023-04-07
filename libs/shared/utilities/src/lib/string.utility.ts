export function removeForbiddenIdChars(id: string): string {
  return id.replace(/(=|-){1,}/g, '')
}

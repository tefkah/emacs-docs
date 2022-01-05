export function getPrefix(str) {
  const [pref, title] = str.replaceAll(/(\w+\/)?([A-H\d\.]+) (.*?)/g, '$2@$3').split('@')

  return { prefix: pref.split('.'), title }
}

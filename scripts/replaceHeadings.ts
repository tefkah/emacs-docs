export default function replaceHeadings({
  heading,
  headingObject,
}: {
  heading: string
  headingObject: any
}) {
  if (!headingObject[heading]) return heading
  console.log(headingObject[heading])
  return headingObject[heading]
}

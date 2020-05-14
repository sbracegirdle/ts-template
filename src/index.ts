export const helloWorld = (): string => {
  const hello = 'hello world'
  console.log(hello)
  return hello
}

if (require.main === module) {
  helloWorld()
}

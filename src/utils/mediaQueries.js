export const mq = (screenSize) => {
  if (screenSize === `mediumUp`) {
    return `@media only screen and (min-width: 800px)`
  }

  if (screenSize === `largeUp`) {
    return `@media only screen and (min-width: 1024px)`
  }
}

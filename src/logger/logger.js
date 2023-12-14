const logTypes = {
  log: {
    color: 'white',
  },
  info: {
    color: 'cyan',
  },
  warn: {
    color: 'orange',
  },
  error: {
    color: 'red',
  },
  debug: {
    color: 'yellow',
  },
  success: {
    color: 'green',
  },
}

const logger = {}
let condition = false

if (typeof process !== 'undefined') {
  condition =
    process.env.NODE_ENV !== 'production' &&
    process.env.NEXT_PUBLIC_ENV !== 'production'
} else {
  condition = import.meta.env.VITE_ENV !== 'production'
}

Object.keys(logTypes).forEach((type) => {
  logger[type] = (message, messageColor = 'inherit', dateColor = 'skyblue') => {
    if (condition) {
      const timestamp = new Date().toISOString()
      if (typeof message === 'string') {
        console.log(
          `%c${timestamp} | %c${type.toUpperCase()}\t: %c${message}`,
          `color: ${dateColor}`,
          `color: ${logTypes[type].color}`,
          `color: ${messageColor}`
        )
      } else {
        console.log(
          `%c${timestamp} | %c${type.toUpperCase()}\t: %c${'[Object]'}`,
          `color: ${dateColor}`,
          `color: ${logTypes[type].color}`,
          `color: ${messageColor}`
        )
        console.log(message)
      }
    }
  }
})

export default logger

function takeANumber(line, name) {
  let i = 0
  while (line[i] != name && i < line.length + 1) {
    i++
  }
  return `Welcome, ${name}. You are number ${i + 1} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    return line[0], line.shift()
  }
}

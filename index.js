// automatically pick platform
const say = require('say')
 
// Stop the text currently being spoken
say.stop()

 
// Fire a callback once the text has completed being spoken
say.speak("42", 'Cellos', 1.01, (err) => {
  if (err) {
    return console.error(err)
  }
 
  console.log('Text has been spoken.')
});
 
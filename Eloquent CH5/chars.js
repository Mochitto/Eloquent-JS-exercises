function dominantDirection(text) {
    let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0))
    return script ? script.direction : null
    }).filter(value => value != null)
    
    return scripts.reduce((before, current) => {
    return current.count > before.count ? current : before 
    })
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
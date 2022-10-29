const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let leaveUnlocked
    if (!box.locked) leaveUnlocked = true
    
    box.unlock(); 
    try {
        body() }
    catch(e) {
        console.log(e) }
    finally {
      if (!leaveUnlocked) {
    box.lock()}
    }
  }
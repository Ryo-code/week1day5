module.exports = {
  message: "This message is from gonna-export-module.js",
  PHI: 1.618,
  explain: function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
  }
}

//would also work as the following...
      // var trigger = {
      //   message: "This message is from gonna-export-module.js",
      //   PHI: 1.618,
      //   explain: function() {
      //     console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
      //   }
      // }
      // module.exports = trigger
//but then you'd have to change everything that says "secretMsgAndMore"
//to "secretMsgAndMore.trigger" in the file that requires this

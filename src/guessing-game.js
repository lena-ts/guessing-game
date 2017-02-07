class GuessingGame {
    constructor() {
	   this.min = 0;
	   this.max = 0;
	   this.result = 0;
    }

    setRange(min, max) {
		this.min = min;
		this.max = max;
    }

    guess() {
	    this.result = (this.min + this.max)/2;	    
		return Math.ceil(this.result);
    }

    lower() {
	    this.max = Math.ceil(this.result);
    }

    greater() {
		this.min = Math.ceil(this.result);
    }
}

module.exports = GuessingGame; 

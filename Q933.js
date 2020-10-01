var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t)
    if(t <= 3001) return this.requests.length;
    else {
        var window = this.requests[this.requests.length-1] - this.requests[0];
        while(window>3000) {
            this.requests.shift();
            window = this.requests[this.requests.length-1] - this.requests[0];
        }
        return this.requests.length;
    }
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

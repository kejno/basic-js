const chainMaker = {

  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {

    let res = value !== undefined ? value : '';
    let str_func = 'function () { }';
    let str = String(res) === str_func ? 'function() {}' : String(res);

    this.arr.push(`( ${str} )`)
    return this

  },
  removeLink(pos) {
    if (typeof (pos) === 'number' && pos <= this.arr.length && pos > 0 && parseInt(pos) == pos) {
      this.arr.splice(pos - 1, 1)
    }
    else {
      this.arr = []
      throw new Error();
    }
    return this
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join('~~')
    this.arr = []
    return str;
  }
};

module.exports = chainMaker;

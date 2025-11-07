const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: null,
  ensureChain() {
    if (!this.chain) this.chain = [];
  },
  getLength() {
    this.ensureChain();
    return this.chain.length;
  },
  addLink(value) {
    this.ensureChain();
    this.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    this.ensureChain();
    if (typeof position !== "number" || position < 1 || position >= this.chain.length) {
      this.chain = null;
      return "You can't remove incorrect link!";
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.ensureChain();
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    this.ensureChain();
    const val = this.chain.map(c => `( ${c} )`).join('~~');
    this.chain = null;
    return val;
  },
};

module.exports = {
  chainMaker,
};

const BugService = require('./bugService');
const BugValidator = require('./bugValidator');

class BugController {
  constructor(context) {
    this.request = context.req;
    this.response = context.res;
    this.next = context.next;
    this.service = new BugService();
    this.validator = new BugValidator();
  }

  async getAllBugs() {
    try {
      const result = await this.service.fetchBug(this.request.query);
      this.response.send(result);
    } catch (err) {
      this.next(err);
    }
  }

  async saveBug() {
    try {
      const result = await this.service.saveBug(this.request.body);
      this.response.send(result);
    } catch (err) {
      this.next(err);
    }
  }

  async modify() {
    try {
      const result = await this.service.modify(this.request.params.id, this.request.body);
      this.response.send(result);
    } catch (err) {
      this.next(err);
    }
  }
}

module.exports = BugController;

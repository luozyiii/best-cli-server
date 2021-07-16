'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  // 获取项目/组件模板
  async getTemplate() {
    const { ctx } = this;
    ctx.body = [
      { a: 1 }, { b: 2 },
    ];
  }
}

module.exports = ProjectController;

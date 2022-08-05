'use strict';

/**
 * wechat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wechat.wechat');

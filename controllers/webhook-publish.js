"use strict";

const axios = require("axios");

const pluginId = require("../admin/src/pluginId");

module.exports = {
  publish: async (ctx) => {
    const { webhook } = strapi.plugins[pluginId].config;

    const { status } = await axios.post(webhook);
    const success = status === 204;

    ctx.send({ success });
  },
};

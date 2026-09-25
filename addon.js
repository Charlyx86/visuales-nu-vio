const { addonBuilder, serveHTTP } = require('stremio-addon-sdk');
const visualConfig = require('./visuales.json');

const builder = new addonBuilder({
    id: 'org.charlyx86.visuales-nu-vio',
    version: '1.0.0',
    name: 'Visuales nu-vio',
    description: 'Addon de visuales de Badger',
    resources: ['stream'],
    types: ['movie', 'series'],
    idPrefixes: ['tt'],
    catalogs: []
});

builder.defineStreamHandler(function(args) {
    return Promise.resolve({ streams: [] });
});

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000, host: '0.0.0.0' });

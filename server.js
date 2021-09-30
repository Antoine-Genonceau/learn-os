var express = require('express'), app = express(), client = require('prom-client');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080, ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });
const counter = new client.Counter({
    name: 'ma_metric',
    help: 'metric_help',
});
app.get('/', function (req, res) {
    res.send('Coucou coucou !');
    counter.inc();
});
app.get('/metrics', function (req, res) {
    res.set('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
});
app.listen(port, ip);
module.exports = app;

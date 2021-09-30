var express = require('express'),
    app     = express()

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
    res.send('Coucou coucou !');
});

app.listen(port, ip);

module.exports = app ;
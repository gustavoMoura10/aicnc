module.exports = app => {
    app.use('/session', require('./routes/sessionRoute'));
    app.use('/spot', require('./routes/spotRoute'));
    app.use('/dashboard', require('./routes/dashboardRoute'));
    app.use('/booking', require('./routes/bookingRoute'));
}
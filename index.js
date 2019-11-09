const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://5408ef735520484588e5a61ac236ae61@sentry.io/1814049' });

Sentry.configureScope(function(scope) {
 scope.setTag("5835512110", "Oakkharachai  Pannoi");
 scope.setUser({
   email: "ballboo088@gmail.com",
   username: "ballboo"
 });
});

myUndefinedFunction();
    
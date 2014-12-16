Template.header.helpers({
    isAdmin: Helpers.isAdmin
});
Template.header.events({
    'click .login-options': function() {
        Overlay.open('loginOverlay');
    },
    'click .logout': function() {
        Meteor.logout(function(err) {
            if (err) {
                Ext.Msg.alert('Error', 'No pudimos cerrar sesión intentalo de nuevo :)');
            }
        });
    }
});
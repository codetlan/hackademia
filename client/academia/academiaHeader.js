Template.academiaHeader.events({
    'click .logout': function() {
        Meteor.logout(function(err) {
            if (err) {
                alert('Error', 'No pudimos cerrar sesión intentalo de nuevo :)');
            }
        });
    }
});
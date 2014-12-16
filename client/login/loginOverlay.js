
Template.loginOverlay.events({
    'click .btn-google': function() {
        Meteor.loginWithGoogle(function(err) {
            if (err) {
               alert(err);
            } else {
                Overlay.close('loginOverlay');
            }
        });
    }
});
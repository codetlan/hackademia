Template.landingHeader.helpers({
    isAdmin: Helpers.isAdmin
});
Template.landingHeader.events({
    'click .login-options': function() {
        Overlay.open('loginOverlay');
    }
});
Helpers = function () {
    return {
        isAdmin: function () {
            return Meteor.user() && Meteor.user().profile && Meteor.user().profile.admin;
        }
    }
}();

Accounts.onCreateUser(function (options, user) {
    console.log('=======onCreateUser========');
    console.log(options);
    var admins = ["iam@armando.mx", "armando@codetlan.com"];//Google
    if (options.profile) {
        console.log(user.services);
        user.profile = user.services.google || user.services.facebook;
        user.profile.picture = user.profile.picture || 'images/profile/default_picture.png';

        if (admins.indexOf(user.profile.email) !== -1) {
            user.profile.admin = true;
        }
    }
    return user;
});
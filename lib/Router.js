Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'app',

    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'notFound',

    // show the appLoading template whilst the subscriptions below load their data
    loadingTemplate: 'loading',

    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present
    waitOn: function() {
        /*return [
            Meteor.subscribe('publicLists'),
            Meteor.subscribe('privateLists')
        ];*/
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
        onBeforeAction: function (pause) {
            if (Meteor.user()) {
                if(Helpers.isAdmin()){
                    this.render('admin');
                }else{
                    console.log('aquie');
                    this.render('academia');
                }
            }
            else{
                this.render('landing');
            }
        }
    });
    this.route('admin', { layoutTemplate: null });
});



/*dataReadyHold = null;

if (Meteor.isClient) {
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data
    dataReadyHold = LaunchScreen.hold();

    // Show the loading screen on desktop
    Router.onBeforeAction('loading', {except: ['join', 'signin']});
    Router.onBeforeAction('dataNotFound', {except: ['join', 'signin']});
}

Router.map(function() {
    this.route('join');
    this.route('signin');

    this.route('listsShow', {
        path: '/lists/:_id',
        // subscribe to todos before the page is rendered but don't wait on the
        // subscription, we'll just render the items as they arrive
        onBeforeAction: function () {
            this.todosHandle = Meteor.subscribe('todos', this.params._id);

            if (this.ready()) {
                // Handle for launch screen defined in app-body.js
                dataReadyHold.release();
            }
        },
        data: function () {
            return Lists.findOne(this.params._id);
        },
        action: function () {
            this.render();
        }
    });

    this.route('home', {
        path: '/',
        action: function() {
            Router.go('listsShow', Lists.findOne());
        }
    });
});

if (Meteor.isClient) {
    Router.onBeforeAction('loading', {except: ['join', 'signin']});
    Router.onBeforeAction('dataNotFound', {except: ['join', 'signin']});
}*/

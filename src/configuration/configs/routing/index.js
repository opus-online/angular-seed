export default ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/users/');
};

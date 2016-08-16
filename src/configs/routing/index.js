export default ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider.otherwise('/home');
};

export default {
    template: `
        <ui-view></ui-view>
    `,
    resolve: {
        translations: ($rootScope, $q) => {
            const deferred = $q.defer();
            $rootScope.$on('$translateLoadingEnd', deferred.resolve);
            return deferred.promise;
        }
    }
};

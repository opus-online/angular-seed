export default ($translateProvider) => {
    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('et');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useMessageFormatInterpolation();
};

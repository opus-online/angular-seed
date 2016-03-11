export default function () {
    this.$get = () => {
        console.log('getting path provider');
        return 'PATH';
    };
};

export default function () {
    this.$get = () => {
        console.log('getting path logger provider');
        return 'LOGGER';
    };
};

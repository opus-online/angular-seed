export default function () {
    return function (input) {
        return new Date(input * 1000);
    };
}

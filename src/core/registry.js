/**
 * Creates a registry that builds the name from folders
 * @param pathTransformers Functions that take the path and transform it into a name
 * @param valueValidators Functions that check the values against best practices
 * @param registration Callback that will be invoked with the application, the transformed name and the value of the file
 * @returns {Function}
 */
export const createFolderNameRegistry = (type, pathTransformers = [], valueValidators = [], registration) => {
    return (context, { application, warn, debug, info, error }) => {

        context
            .keys()
            .forEach((path) => {

                const transformedName = pathTransformers.reduce((original, transformer) => transformer(original), path);
                const value = context(path).default;

                valueValidators.forEach((validator) => validator({ path, name : transformedName, value }, { warn, debug, info, error}));

                debug(`Registering '${type}' from '${path}' with transformed name '${transformedName}'`);
                registration(application, transformedName, value);
            });
    };
};

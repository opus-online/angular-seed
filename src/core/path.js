export const resolveFileName = (path) => {
    const indexOfSlash = path.lastIndexOf('/');
    const indexOfDot = path.lastIndexOf('.');
    return path.substring(indexOfSlash + 1, indexOfDot);
};

export const splitPathToFolders = (path) => {
    const pathWithFilename = path.substring(2).substring(-3);
    const index = pathWithFilename.lastIndexOf('/');
    return pathWithFilename.substring(0, index).split('/');
};

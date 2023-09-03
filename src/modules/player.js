const createPlayer = (name, marker) => {
    return {
        getName: () => name,
        getMarker: () => marker,
    };
};

export default createPlayer;

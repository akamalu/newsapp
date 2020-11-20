export const addClip = ({ clip }) => {
    returm {
        type: 'ADD_CLIP',
        clip,
    };
};

export const deleteClip = ({ clip }) => {
    returm {
        type: 'DELETE_CLIP',
        clip,
    };
};
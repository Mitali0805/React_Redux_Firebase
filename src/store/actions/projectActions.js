export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Maithili',
            authorLastname: 'Paranjape',
            authorId: 12345,
            createdAt: new Date()
        })
            .then(() => {
                dispatch({
                    type: 'CREATE_PROJECT',
                    project
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'CREATE_PROJECT_ERROR',
                    err
                })
            })

    }
}
import firebase from './config';

export const getSpecificDocument = collection => document =>
  firebase
    .collection(collection)
    .doc(document)
    .get()
    .then(doc => doc.data())
    .catch(err => {
      console.log('Error getting document', err);
    });

export const getSetting = document => getSpecificDocument('settings')(document);

export const getProjects = firebase.collection('projects');

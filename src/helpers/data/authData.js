import firebase from 'firebase/app';
import 'firebase/auth';

const getUid = () => firebase.auth().currentUserId;

export default getUid;

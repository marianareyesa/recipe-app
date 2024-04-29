import { firestore } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getRecipes = async () => {
  const recipesCol = collection(firestore, 'recipes');
  const snapshot = await getDocs(recipesCol);
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, ...data };
  });
};

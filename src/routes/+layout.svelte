<script>
// @ts-nocheck
  import { auth, db } from "$lib/firebase/firebase";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  import "../app.pcss";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import { authStore } from "../store/store";

  const nonAuthRoutes = ['/', "/Login", "/Student/SignUp"]

  onMount(() => {
    console.log(`Mounting`)

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const currentPath = window.location.pathname

      if(!user && !nonAuthRoutes.includes(currentPath)) {
        window.location.href = '/Login';
        return
      }

      if (user && (currentPath === '/Login' || currentPath === '/Student/SignUp')) {
    const userDocRef = doc(db, 'user', user.uid);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const userRole = userData.role;
      if (userRole === 'student') {
            window.location.href = '/Student/Dashboard';
             return;
        }
      if (userRole === 'registrar') {
            window.location.href = '/Registrar/Dashboard';    
              return;
        }
      if (userRole === 'admin') {
            window.location.href = '/Admin/Dashboard';
           return;
      } 
      return;
    } 
    
  }

      if (!user) {
        return;
      }

      let dataToSetToStore;
      const docRef = doc(db, 'user', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        dataToSetToStore = userData;
      } 
      authStore.update((curr) => {
        return {
        ...curr,
        user,
        data: dataToSetToStore,
        loading: false,
      }
      })
    })
  })

</script>

<slot></slot>
<Footer></Footer>

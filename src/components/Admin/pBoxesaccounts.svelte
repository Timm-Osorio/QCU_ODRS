<script>
    import { goto } from '$app/navigation';
    import { onMount, onDestroy } from 'svelte';
    import { getFirestore, collection, getDocs } from "firebase/firestore";
    import 'firebase/firestore';
    import { db } from "$lib/firebase/firebase";

      function gotoAccount () {
                  goto('/Admin/Addaccount');
      }
      function gotoRegis () {
                  goto('/Admin/Accounts');
      }
      function gotoAccs () {
                  goto('/Admin/Usersaccount');
      }

      let studentCount = 0;
      let regisCount = 0;
      
      //CALL USER COUNT
    const fetchUserCount = async () => {
          try {
          const usersCollectionRef = collection(db, 'students');
          const regisCollectionRef = collection(db, 'registrar');

          const userquerySnapshot = await getDocs(usersCollectionRef);
          const regisquerySnapshot = await getDocs(regisCollectionRef);
          
          studentCount = userquerySnapshot.size;
          regisCount = regisquerySnapshot.size;
        } catch (error) {
          console.error('Error fetching user count:', error);
        }
      };

onMount(fetchUserCount);

</script>

<!-- THREE BOXES --> 

<div class=" pl-0 pt-3  mx-auto justify-center">
      <div class="h-[20vh] w-[220px] bg-slate-500 rounded-[5px] shadow-sm text-center ">
            <box-icon type='solid' name='user-plus' class="h-[12vh] w-[100px]   "></box-icon> <br/>
            <button on:click={gotoAccount} class="rounded-[10px] btn-sm h-[10px] w-42 shadow-sm bg-slate-900 text-white hover:bg-slate-800 ">ADD REGISTRAR</button>
      </div>
  
      <div class="h-[22vh] w-[220px] bg-white rounded-[5px] shadow-sm text-center mt-5 ">
      <span class="text-[70px] text-slate-700 font-bold">{regisCount}</span><br/>
      <button on:click={gotoRegis} class=" btn-link text-[15px] text-black font-bold pb-5 no-underline  hover:text-slate-500">REGISTRAR</button>
      </div>

      <div class="h-[22vh] w-[225px] bg-white rounded-[5px] shadow-sm text-center mt-5">
      <span class="text-[70px] text-slate-700 font-bold ">{studentCount}</span><br/>
      <button on:click={gotoAccs} class=" btn-link text-[15px] text-black font-bold pb-5 no-underline  hover:text-slate-500">USERS' ACCOUNT</button>
      </div>
</div>
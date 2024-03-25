<script>
    import { onMount, onDestroy } from 'svelte';
    // @ts-ignore
    import { getFirestore, collection, getDocs } from "firebase/firestore";
    import 'firebase/firestore';
    import { db } from "$lib/firebase/firebase";

  
    let currentDate = new Date();
    let currentTime = new Date();
    let currentYear = new Date();
    let studentCount = "...";
    let regisCount = 0;
  
    //CALL REAL TIME
    const updateTime = () => {
      currentTime = new Date();
    };

    const interval = setInterval(updateTime, 1000);
    onMount(() => {
      // Start updating the time when the component is mounted
      updateTime();
    });
  
    onDestroy(() => {
      // Clear the interval when the component is destroyed
      clearInterval(interval);
    });

    //CALL USER COUNT
    const fetchUserCount = async () => {
          try {
          const usersCollectionRef = collection(db, 'students');
          const regisCollectionRef = collection(db, 'registrar');

          const userquerySnapshot = await getDocs(usersCollectionRef);
          const regisquerySnapshot = await getDocs(regisCollectionRef);
          
          // @ts-ignore
          studentCount = userquerySnapshot.size;
          regisCount = regisquerySnapshot.size;
        } catch (error) {
          console.error('Error fetching user count:', error);
        }
      };

onMount(fetchUserCount);

</script>

  <div class="text-[90px] text-black font-bold text-center">  
    {currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
  </div>
  <div class="text-[30px] text-black font-semibold text-center" >
    {currentDate.toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' })}
  </div>
  <div class="text-[30px] text-black font-semibold text-center" >
    {currentYear.toLocaleDateString([], { weekday: 'long'  })}
  </div>

  <div class="flex gap-10 text-center mx-auto p-5 justify-center pt-10">
    <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg p-5"> 
      {#if studentCount === "..."}
      <span class="loading loading-ring loading-lg w-[105px] bg-blue-900  "></span>
      {:else}
       <h1 class="text-[#101010c4] font-semibold text-[100px]">{studentCount}</h1>
      {/if}
        
        <h2 class="text-black font-bold text-[20px] ">Total User</h2>
    </div>
    <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg p-5"> 
        <h1 class="text-[#101010c4] font-semibold text-[100px]">6</h1>
        <h2 class="text-black font-bold text-[20px] ">Documents</h2>
    </div>
    <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg p-5">
      {#if studentCount === "..."}
      <span class="loading loading-ring loading-lg w-[105px] bg-blue-900  "></span>
      {:else}
      <h1 class="text-[#101010c4] font-semibold text-[100px]">{regisCount}</h1>
      {/if}
       
        <h2 class="text-black font-bold text-[20px] ">Total Registrar</h2> </div>
  </div>

   
  
<script>
  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import PBoxesaccounts from '../../../components/Admin/pBoxesaccounts.svelte';
  import { onMount } from 'svelte';
  import { db } from "$lib/firebase/firebase";
  import { collection, getDocs } from "firebase/firestore";
  import { goto } from '$app/navigation';

  // Variable
    /**
     * @type {any[]}
     */
    let data = [];

  // Fetch data from Firestore collection
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'students'));
      data = querySnapshot.docs.map(doc => doc.data());
    };

    onMount(fetchData);
</script>

<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>
  
    <div class="ml-[300px] p-5 ">
      <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE ACCOUNTS <span class="float-end text-[20px] text-slate-600">USERS' ACCOUNT</span></h1>
      <!-- CONTAINER --> 
      <div class="h-[200px] w-[200] flex gap-x-5">
        <PBoxesaccounts/>
       
        <!--ADD REGISTRAR ACCOUNT-->
        <div class="h-[70vh] w-[80%] bg-slate-100  mt-3 rounded-md shadow-md p-5 flex ">
          <div class="overflow-x-auto  w-[200%]">
            <table class="table ">
              <!-- head -->
              <thead class="top-0 sticky bg-slate-900 z-30">
                <tr>
               
                  <th class="text-slate-200 text-[15px]">FULL NAME</th> 
                  <th class="text-slate-200 text-[15px]">COURSE</th>
                  <th class="text-slate-200 text-[15px]">STUDENT ID</th>
                </tr>
              </thead>
              <tbody> 
                {#each data as item}
                <!-- row 1 -->
                <tr>
                
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class=" w-12 h-12">
                          <img src="/jelly-avatar-icon.png" alt=""/>
                        </div>
                      </div>
                      <div>
                        <div class="font-medium text-black">{item.fname}</div>
                     
                      </div>
                    </div>
                  </td>
                  <td>
                    
                    <span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">{item.prog}</span>
                  </td>
                  <td class="text-black">{item.stud_no}</td>
                
                </tr>
               
                {/each}
              </tbody>
              <!-- foot -->
             
              
            </table>
          </div>
        </div>  
  
      </div>
  
     
      
    </div>
  
  </div>
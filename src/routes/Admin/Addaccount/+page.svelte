<script>
  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import PBoxesaccounts from '../../../components/Admin/pBoxesaccounts.svelte';
  import { goto } from '$app/navigation';
  import { authHandlers } from "../../../store/store";
  import { doc, setDoc } from 'firebase/firestore';
  import { db } from "$lib/firebase/firebase";
  

  //Page routing
  function gotoRegis () {
              goto('/Admin/Accounts')
  }

  let fn = "";
  let un = "";
  let pass = "";
  let cpass = "";
  let dept = "";

  let authenticating = false;
  let error = false;

  const departments = ['BECEd', 'BSIE', 'BSECE', 'BS Entrep', 'BSA', 'BSIT', 'BSIS', 'BSCS'];

  async function handleAuthentication() {
    if(authenticating){
      return;
    }
    authenticating = true; 
    if(pass === cpass){ 
    try {
      const userCredential = await authHandlers.signup(un, pass);
      console.log("userCredential:", userCredential); // Log userCredential object
      const user = userCredential.user;
        await setDoc(doc(db,'user', user.uid), {
          role: "registrar"
        })
        await setDoc(doc(db, 'registrar', user.uid), {
          fname: fn,
          uname: un,
          dept: dept,
         
          uid: user.uid
        });
        fn = "";
        un = "";
        pass = "";
        cpass = "";
        dept = "";
    } catch (err) {
      console.log("There was an auth error", err);
      error = true;
    } finally {
      authenticating = false;
    }
  }
  }


</script>

<div class="h-[105vh] w-full bg-slate-300">
  <PHeader/>
  <Psidebar/>

  <div class="ml-[300px] p-5 ">
    <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE ACCOUNTS</h1>
    <!-- CONTAINER --> 
    <div class="  flex gap-x-5">
      <PBoxesaccounts/>
     
      <!--ADD REGISTRAR ACCOUNT-->
      <div class="h-[70vh] w-[80%] bg-slate-100  mt-3 rounded-md shadow-md p-5">
        <div class="w-full pl-10 ">
          <h1 class=" text-slate-900 text-[25px]  font-bold ">ADD REGISTRAR ACCOUNT</h1>
        </div>
        <!--form for registrar entry-->
        <div class=" flex w-full pl-10 pr-10 pt-5 gap-14 ">
            <div class="w-full p-1 ">
              <label class="form-control w-full max-w-xs  ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium ">Full name:</span>
                </div>
                <input bind:value={fn} type="text" placeholder="Type here"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required />
              </label>

              <label class="form-control w-full max-w-xs pt-4 ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium">Username:</span>
                </div>
                <input bind:value={un} type="text" placeholder="name@educ.com"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]  " required />
                <div class="label">
                  <span class="label-text-alt"></span>
                  <span class="label-text-alt text-slate-600">Example@educ.com</span>
                </div>
                
              </label>
              <label class="form-control w-full max-w-xs ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium">Department:</span>
                </div>
                  <select  bind:value={dept} class="select select-bordered w-full max-w-xs text-black bg-slate-300 shadow-sm border-[0.5px] border-[#0a0a0a2b]" >
                    <option disabled selected class="text-slate-600">Select department</option>
                    {#each departments as department}
                      <option>{department}</option>
                    {/each}
                  </select>
              </label>

             
            </div>
            <div class="w-full  p-1">
              <label class="form-control w-full max-w-xs ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium ">Pasword:</span>
                </div>
                <input bind:value={pass} type="password" placeholder="Type here"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required/>
              </label>   
              <label class="form-control w-full max-w-xs pt-4">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium ">Confirm Pasword:</span>
                </div>
                <input bind:value={cpass} type="password" placeholder="Type here"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required/>
              </label> 
          
              
            </div>
            
      </div>
      <div class="mt-2 pr-14 float-right ">
        <button onclick="my_modal_6.showModal()" class="btn btn-active shadow-md">SUBMIT</button>
        <dialog id="my_modal_6" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-blue-700">ADD</h3>
            <p class="py-4">Are you sure want to ADD this account? </p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button on:click={handleAuthentication} onclick="my_modal_10.showModal()" class="btn">
                  {#if authenticating}
                  <span class="loading loading-dots loading-md"></span>
                  {:else}
                  Yes
                  {/if}
                </button>
                <button  class="btn">Close</button>
                <dialog on:click={gotoRegis} id="my_modal_10" class="modal">
                  <div class="modal-box">
                    <h3 class="font-bold text-lg text-blue-700 ">Added</h3>
                    <p class="py-4">Account CREATED</p>
                  </div>
                  <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </form>
            </div>
          </div>
        </dialog>
        
      </div>
      

      </div>  

    </div>

   
    
  </div>

</div>
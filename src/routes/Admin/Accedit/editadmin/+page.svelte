<script>
   
    import PHeader from '../../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../../components/Admin/psidebar.svelte';
    import { getAuth, updatePassword } from "firebase/auth";
    import { onMount } from 'svelte';
    // @ts-ignore
    import { doc, getDoc, updateDoc, collection } from 'firebase/firestore';
    import { db } from "$lib/firebase/firebase";
    // @ts-ignore
    import { error, text } from "@sveltejs/kit";
    import firebase from 'firebase/compat/app';
    import { goto } from '$app/navigation';
  
    function gotoAdmindetail () {
          goto('/Admin/Accedit')
    } 


    // @ts-ignore
    let email = "loading...";
    // @ts-ignore
    let fn = "loading...";
    let submit = "UPDATE";
    let isSubmitting = false; 
    let newPassword = "";
    let newFullName = "";

    const auth = getAuth();
    const user = auth.currentUser;

    // @ts-ignore
    onMount(async () => {
        if (user) {
            const docRef = doc(db, "user", user.uid);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                const data = snapshot.data();
                email = data.email;
                fn = data.fullname;
            }
        }
    });


 
    // Function to update user password
        async function updateUserPassword() {
        try {
          // Tingen sa console kong may nagbabago pag wala putangina ka
            if (!newPassword) {
                console.error("New password cannot be empty");
                return;
            }

            isSubmitting = true;
            // @ts-ignore
            await updatePassword(user, newPassword);
            console.log("Password updated successfully!");
            isSubmitting = false;
        } catch (error) {
            console.error("Error updating password: ", error);
            isSubmitting = false; 
        }
        
        
    }

</script>
<style>
    ::placeholder {
        color: rgba(0, 0, 0, 0.607);
    }
</style>


<div class="h-[105vh] w-full bg-slate-300  " >
    <PHeader/>
    <Psidebar/>
 
    <div class="ml-[300px] p-5 h-[70vh] ">
        <h1 class="pl-0 text-[30px] text-black font-bold">ADMIN ACCOUNT</h1>
            <div class="  w-[100%] ">
                <div class=" h-[55vh] w-[50vw] bg-slate-100 mx-auto mt-10 rounded-md shadow-xl ">
                    <box-icon on:click={gotoAdmindetail} class="float-right top-0 m-2 cursor-pointer hover:bg-slate-300  hover:rounded-sm edit hover:fill-sky-700   " name='share'></box-icon>
                    <div class="pt-7 pl-8 ">
                        <img src="/cute.jpg" class=" w-[130px] h-[130px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto shadow-xl "  alt="pao" />
                    </div>

                    <div class=" flex w-full pl-10 pr-10 pt-5 gap-5 ">
                        <div class="w-full p-1 ">
                          <label class="form-control w-full max-w-xs  ">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium ">Full name:</span>
                            </div>
                            <input bind:value={fn} type="text" placeholder="newfullname"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required />
                          </label>
            
                          <label class="form-control w-full max-w-xs pt-4 ">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium">Email:</span>
                            </div>
                            <input bind:value={email}  type="text" placeholder=""  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] " />
                          </label>
            
                         
                        </div>
                        <div class="w-full  p-1">
                          <label class="form-control w-full max-w-xs ">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium ">Password:</span>
                            </div>
                            <input bind:value={newPassword} type="password" placeholder="newpass"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" />
                          </label>   
                          <div class="label">
                            <span class="label-text text-slate-600 text-[15px] font-medium pt-4">Change password?</span>
                          </div>
                          <div class="float-right">
                            
                            <button on:click={updateUserPassword} class="h-12 rounded-md w-[40vh] bg-slate-900 hover:bg-slate-800 text-slate-200">
                              {#if isSubmitting}
                                  <span class="loading loading-dots loading-sm bg-slate-300 w-[18px] "></span>
                              {:else}
                                  {submit}
                              {/if}
                          </button>
                        </div>
                      
                          
                        </div>
                        
                  </div>
                </div>

            </div>
  
        
    </div>
    

</div>  
<script>
    import { goto } from '$app/navigation';
    import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';
    import PBoxesaccounts from '../../../components/Admin/pBoxesaccounts.svelte';
  

    function gotoAccs () {
              goto('/Admin/Accounts');
    }






    
</script>
<style>
    input::placeholder {
    color: black;
  }
</style>


<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>
  
    <div class="ml-[300px] p-5 ">
      <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE ACCOUNTS<span class="float-end text-[20px] text-slate-600"></span></h1>
      <!-- CONTAINER --> 
      <div class="h-[200px] w-[200] flex gap-x-5">
        <PBoxesaccounts/>
       
        
        <!-- registrar --> 
       
        <div class="h-[70vh] w-[80%] bg-slate-100  mt-3 rounded-md shadow-md p-5">
            <div class="w-full pl-10 ">
              <h1 class=" text-slate-900 text-[25px]  font-bold ">ACCOUNT INFORMATION</h1>
            </div>
            <!--form for registrar entry-->
            <div class=" flex w-full pl-10 pr-10 pt-5 gap-14 ">
                <div class="w-full p-1 ">
                  <label class="form-control w-full max-w-xs  ">
                    <div class="label">
                      <span class="label-text text-black text-[15px] font-medium ">Full name:</span>
                    </div>
                    <input type="text"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" />
                  </label>
    
                  <label class="form-control w-full max-w-xs pt-4 ">
                    <div class="label">
                      <span class="label-text text-black text-[15px] font-medium">Username:</span>
                    </div>
                    <input type="text"   class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] " />
                  </label>
    
                  
                </div>


                <div class="w-full  p-1">
                    <label class="form-control w-full max-w-xs ">
                        <div class="label">
                          <span class="label-text text-black text-[15px] font-medium">Position:</span>
                        </div>
                        <input type="text" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] " />
                      </label>
                  <label class="form-control w-full max-w-xs pt-4 ">
                    <div class="label">
                      <span class="label-text text-black text-[15px] font-medium ">Pasword:</span>
                    </div>
                    <input type="password"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" />
                  </label>   
                 
                 
                  
                </div>
                
          </div>
          <div class="p-8 pr-14 float-right">
            <button onclick="my_modal_5.showModal()" class="btn btn-active shadow-md hover:bg-red-800 ">DELETE</button>
            <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg text-red-700">Delete</h3>
                <p class="py-4">Are you sure you want to DELETE this account?</p>
                <div class="modal-action">
                  <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button on:click={gotoAccs} onclick="my_modal_2.showModal()" class="btn">Yes</button>
                    <button class="btn">Close</button>
                    <dialog id="my_modal_2" class="modal">
                      <div class="modal-box">
                        <p class="py-4">Account DELETED</p>
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
          <div class="pt-8 float-right">
            <button   onclick="my_modal_4.showModal()" class="btn btn-active shadow-md hover:bg-green-800">UPDATE</button>
            <dialog id="my_modal_4" class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg text-green-700">Update</h3>
                <p class="py-4">Are you sure you want to UPDATE this account?</p>
                <div class="modal-action">
                  <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button on:click={gotoAccs} onclick="my_modal_1.showModal()" class="btn">Yes</button>
                    <button class="btn">Close</button>
                    <dialog id="my_modal_1" class="modal">
                      <div class="modal-box">
                        <p class="py-4">Account UPDATED</p>
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
<script>
  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import PBoxesaccounts from '../../../components/Admin/pBoxesaccounts.svelte';

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
                        <div class="font-medium text-black">Hart Hagerty</div>
                     
                      </div>
                    </div>
                  </td>
                  <td>
                    
                    <span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">ENTREP</span>
                  </td>
                  <td class="text-black">20-2020</td>
                
                </tr>
                <!-- row 2 -->
                <tr>
                
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class=" w-12 h-12">
                          <img src="/jelly-avatar-icon.png" alt=""/>
                        </div>
                      </div>
                      <div>
                        <div class="text font-medium text-black">Liz cute</div>
                        
                      </div>
                    </div>
                  </td>
                  <td>
                    
                    <span class="badge badge-ghost bg-slate-600 text-white  badge-sm h-7">BSIT</span>
                  </td>
                  <td class="text-black">19-2012</td>
                 
                </tr>
                <!-- row 3 -->
                <tr>
                 
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class=" w-12 h-12">
                          <img src="/jelly-avatar-icon.png" alt=""/>
                        </div>
                      </div>
                      <div>
                        <div class="font-medium text-black">BABY CALMA JR.</div>
                       
                      </div>
                    </div>
                  </td>
                  <td>
                    
                    <span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">BSA</span>
                  </td>
                  <td class="text-black">19-1025</td>
                 
                </tr>
                <!-- row 4 -->
                
              </tbody>
              <!-- foot -->
             
              
            </table>
          </div>
        </div>  
  
      </div>
  
     
      
    </div>
  
  </div>
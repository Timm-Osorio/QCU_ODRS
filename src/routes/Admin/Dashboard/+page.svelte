<script>
   
    import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';

    import Livetime from '../../../components/Admin/pLivetime.svelte';


</script>

<div class="h-[105vh] w-full bg-slate-300  " >
    <PHeader/>
    <Psidebar/>
 
    <div class="ml-[300px] p-5 h-[70vh] ">
        <h1 class="pl-0 text-[30px] text-black font-bold">DASHBOARD</h1>
        
            <Livetime/>
        
    </div>
    

</div>  
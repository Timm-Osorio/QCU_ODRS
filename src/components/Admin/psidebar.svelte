<script>
   
    import { goto } from '$app/navigation';
    import { authHandlers } from '../../store/store';
    import { getAuth } from "firebase/auth";
    // @ts-ignore
    import { doc, getDoc, updateDoc } from 'firebase/firestore';
    import { db } from "$lib/firebase/firebase";
    //Show user data 

    // @ts-ignore
    let fn = "...";

    const auth = getAuth();
    const user = auth.currentUser;

    // @ts-ignore
    if(user) {
        const docRef = doc(db, "user", user.uid);
        getDoc(docRef).then((snapshot) => {
            let docSnap = snapshot;
            if (docSnap.exists()) {
                const data = docSnap.data();
                fn = data.fullname;
            }
        }).catch((error) => {
            console.error("Error getting document:", error);
        });
    }





    //ROUTING PAGES
    function gotoAccount () {
                goto('/Admin/Accounts')

    }
    function gotoAdmin () {
                goto('/Admin/Dashboard')
    }
    function gotoHistory () {
                goto('/Admin/History')
    }
    function gotoDocuments () {
                goto('/Admin/Documents')
    }
    function gotoALogin () {
                goto('/Admin/AdminLogin')
    }
    function gotoAdminEdit () {
                goto('/Admin/Accedit')
    }
    

</script>

<div class=" h-full w-[300px] bg-white z-20 shadow-xl fixed " >
    <div class="pt-7">
        <img src="/cute.jpg" on:click={gotoAdminEdit} class="cursor-pointer w-[130px] h-[130px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto" alt="pao" />
    </div>
       
    
    <h1 class="text-black font-semibold text-[25px] text-center pt-2" > ADMIN </h1>
    <div class="text-center">
    {#if fn === "..."}
        <span class="loading loading-dots loading-sm bg-blue-900 w-[18px] "></span>
    {:else}
        <h1 class="text-slate-700 font-semibold text-[15px] text-center pb-2 pt-0">{fn}</h1>
    {/if}
    </div>

    <div class="h-1 w-[250px] bg-[#2f2f2ff0] mx-auto "> </div>

    <ul class="  justify-end ">
        <li class="pt-3 text-center">
            <button on:click={gotoAdmin} class="h-[40px] rounded-[10px] text-white hover:bg-slate-800 hover:scale-95 btn-wide bg-slate-900  duration-200">DASHBOARD</button> 
        </li>
        <li class="pt-2 text-center">
            <button on:click={gotoDocuments} class="h-[40px] rounded-[10px] text-white hover:bg-slate-800 hover:scale-95 btn-wide bg-slate-900 duration-200">DOCUMENTS</button>
        </li> 
        <li class="pt-2 text-center">
            <button on:click={gotoAccount} class="h-[40px] rounded-[10px] text-white hover:bg-slate-800 hover:scale-95 btn-wide bg-slate-900 duration-200">ACCOUNTS</button>
        </li>
        <li class="pt-2 text-center">
            <button on:click={gotoHistory} class="h-[40px] rounded-[10px] text-white hover:bg-slate-800 hover:scale-95 btn-wide bg-slate-900 duration-200">HISTORY</button>
        </li> 
       
        <li class="fixed pl-5 pb-5 bottom-0 text-center">
            <button  on:click={authHandlers.logout} class="h-[40px] rounded-[10px] text-white hover:bg-slate-800 hover:scale-95  btn-wide bg-slate-900 duration-200">LOGOUT</button>
        </li> 
    </ul>
    
</div>
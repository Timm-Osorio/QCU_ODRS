<script>
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
  import { onMount, onDestroy } from "svelte";

  let currentDate = new Date();
  let currentTime = new Date();
  let currentYear = new Date();

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
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
      <Sidebar />

      <div class="flex flex-col flex-1 mx-auto w-full">
        <h1 class="p-3 text-[30px] text-black font-bold">DASHBOARD</h1>

        <div class="text-[90px] text-black font-bold text-center">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div class="text-[30px] text-black font-semibold text-center">
          {currentDate.toLocaleDateString([], {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div class="text-[30px] text-black font-semibold text-center">
          {currentYear.toLocaleDateString([], { weekday: "long" })}
        </div>
        <div class="flex flex-row gap-5 mt-5">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Pending Request</h2>
              <p>10</p>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Completed Request</h2>
              <p>10</p>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Scheduled Request</h2>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</main>

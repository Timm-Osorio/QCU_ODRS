<script>
  // @ts-nocheck
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
        <Sidebar />
        <div class="flex flex-col flex-1 mx-auto w-full">

          <h1 class="p-3 text-[30px] text-black font-bold">
            REGISTRAR ACCOUNT
          </h1>
            <div class="h-[55vh] w-[50vw] bg-slate-100 mx-auto rounded-md">
              <div class="pt-5">
                <img src="data:image/jpeg;base64,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"
                  class="w-[130px] h-[130px] rounded-full mx-auto"
                  alt=""
                />
              </div>

              <div class=" flex w-full pl-10 pr-10 pt-5 gap-5">
                <div class="w-full p-1">
                  <label class="form-control w-full max-w-xs">
                    <div class="label">
                      <span
                        class="label-text text-black text-[15px] font-medium"
                        >Full name:</span
                      >
                    </div>
                    <input
                      type="text"
                      placeholder="Haewon Mahal"
                      class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"
                      required
                    />
                  </label>

                  <label class="form-control w-full max-w-xs pt-4">
                    <div class="label">
                      <span
                        class="label-text text-black text-[15px] font-medium"
                        >Email:</span
                      >
                    </div>
                    <input
                      disabled
                      type="text"
                      placeholder="registrar@example.com"
                      class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"
                    />
                  </label>
                </div>
                <div class="w-full p-1">
                  <label class="form-control w-full max-w-xs">
                    <div class="label">
                      <span
                        class="label-text text-black text-[15px] font-medium"
                        >Pasword:</span
                      >
                    </div>
                    <input
                      type="password"
                      placeholder="admin123"
                      class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"
                    />
                  </label>
                  <div class="label">
                    <span
                      class="label-text text-slate-600 text-[15px] font-medium pt-4"
                      >Change password?</span
                    >
                  </div>
                  <div class="float-right">
                    <button
                      onclick="my_modal_1.showModal()"
                      class="h-12 rounded-md w-[45vh] bg-slate-900 hover:bg-slate-800 text-slate-200"
                      >UPDATE</button
                    >

                    <dialog id="my_modal_1" class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg">Update</h3>
                        <p class="py-4">
                          Are you sure to UPDATE Admin Password?
                        </p>
                        <div class="modal-action">
                          <form method="dialog">
                            <!-- if there is a button in form, it will close the modal -->
                            <button class="btn hover:bg-green-700">YES</button>
                            <button class="btn">No</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</SectionWrapper>
</main>

<style>
  ::placeholder {
    color: black;
  }
</style>

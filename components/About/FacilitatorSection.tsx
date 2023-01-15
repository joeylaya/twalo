export function FacilitatorSection() {
  return (
    <section class="relative">
      <span id="facilitator" class="absolute -top-16"></span>
      <div class="bg-white shadow rounded-2xl p-8 flex flex-col gap-8 md:flex-row">
        <div class="flex flex-col gap-4">
          <img src="/elita_laya.png" alt="" />
          <div>
            <p class="text-indigo-500 font-display font-bold text-2xl md:text-4xl">Elita Laya, M.A.</p>
            <p class="text-indigo-800 font-bold text-lg md:text-2xl">they/them</p>
          </div>
        </div>
        <div>
          <p>Elita is...</p>
        </div>
      </div>
    </section>
  )
}

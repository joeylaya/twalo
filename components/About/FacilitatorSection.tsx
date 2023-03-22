export function FacilitatorSection() {
  return (
    <section class="mt-16 flex justify-center relative">
      <span id="facilitator" class="absolute -top-16"></span>
      <div class="bg-white shadow rounded-2xl p-8 flex flex-col gap-8 md:(flex-row)">
        <div class="flex flex-col gap-4 items-center">
          <img class="max-w-[52rem]" src="/elita_laya.png" alt="" />
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col items-center md:items-start">
            <h2 class="text-indigo-500 font-bold text-3xl md:text-5xl">elita laya, m.a.</h2>
            <p class="text-indigo-800 font-bold text-lg md:text-2xl">they/them</p>
          </div>
          <div class="flex flex-col gap-4 max-w-[600px]">        
            <p> elita (they) is a Black, queer, trans, and nonbinary scholar-activist. elita is
                committed to demanding more than minimal from our research, institutions,
                organizations, and individuals.
            </p>
            <p>  
                They inspire us to co-create change, harness
                our communal power, and reclaim liberatory minds, bodies, and futures
            </p>
            <p> 
                They are the Executive Director of Twalo, a consulting organization providing
                anti-oppression coaching, training, and workshops for queer and trans
                liberation.
            </p>
            <p> 
                elita is a Ph.D. candidate in Urban Education Leadership,
                researching anti-Blackness and the school-to-death nexus
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

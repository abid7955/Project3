import React from "react";
function How(){
  return (
    <>
        <h2 className='text-3xl color-[#09005F] font-bold text-center w-full mt-5'>How We Work</h2>
        <div className="m-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <section class="bg-white">
                <div class="container px-6 py-12 mx-auto">
                    <div class="grid grid-cols-1 gap-8">
                        <div className='bg-gray-900 p-10 rounded-xl'>

                            {/* <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Default Taiwindcss Config</h1> */}

                            <p class=" text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                        </div>

                        <div className='bg-[#D6E1F3] p-10 rounded-xl'>
                            
                            {/* <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Fully Responsive Components</h1> */}

                            <p class=" text-[#09005F] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                        </div>

                        <div className='bg-[#D6E1F3] p-10 rounded-xl'>
                           

                            {/* <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">RTL Languages Support</h1> */}

                            <p class=" text-[#09005F] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section2  */}
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    class="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </div>
    </>
)
}
export default How;
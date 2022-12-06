<template>
  <div class="font-Prompt bg-black">
    <div class="bg-cover bg-center w-full h-screen" style="background-image: url(https://media.discordapp.net/attachments/803211285797535755/1049708018322898954/bg-home.png)">
      <div class="w-full h-screen bg-gradient-to-l from-transparent to-black">

        <div class="container mx-auto">
          <div class="h-screen grid content-center text-start mx-3">
            <div>
              <span class="font-semibold text-6xl text-white">ELLAFERN DEV.</span>
              <p class="text-white">↪ การนอนคือทุกสิ่งและช่วยสร้างสรรค์ทุกอย่าง?<br>ยินดีต้อนรับสู่โลกของเรา</p>
              <div class="mt-4">
                <a href="#profile"
                  class="px-5 py-1 outline outline-pink-300  outline-1 rounded glow-pink-400 text-pink-300 transition hover:bg-pink-300 hover:text-white">
                  What is ELF ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="profile" class="bg-cover w-full min-h-screen"
      style="z-index: 1; box-shadow: 0px -23px 36px 16px rgba(0,0,0,0.68); position: relative; background-image: url(https://media.discordapp.net/attachments/803211285797535755/1049708018322898954/bg-home.png)">
      <div style="position: absolute; right: 0" class="mt-4 z-10">
        <div class="rounded-l-full bg-pink-400 py-2 px-5 text-white">
          <div class="grid grid-cols-4 gap-4">
            <div class="transition hover:scale-105">
              <a href="#profile" class="transition  hover:text-pink-300">
                โปรไฟล์
              </a>
            </div>
            <div class="transition hover:scale-105">
              <a href="#mywork" class="transition  hover:text-pink-300">
                ผลงาน
              </a>
            </div>
            <div class="transition hover:scale-105">
              <a href="mailto:me@ellafern.net" class="transition  hover:text-pink-300">
                ติดต่อ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="polka w-full min-h-screen">
        <div class="container mx-auto">
          <div class="hero min-h-screen w-full">

            <div class="hero-content flex-col lg:flex-row mt-14">
              <img src="https://media.discordapp.net/attachments/803211285797535755/1049708135952167022/profile.png" class="max-w-sm rounded-lg shadow-2xl pr-1" />
              <div>
                <h1
                  class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-200 via-pink-400 to-pink-700">
                  ELLAFERN</h1>
                <p class="p-0 text-white opacity-70 font-light">แนะนำตัวกันก่อนละกัน! <span class="font-medium">อายาเมะ
                    เอลล่าเฟิร์น</span> อายุ <span class="font-medium">{{ new Date().getFullYear() - 2004 }} </span>
                  ปี<br>เกิด <span class="font-medium">วันพุธที่ 3 มีนาคม พ.ศ. 2547</span> อาศัยอยู่ในตัวเมือง <span
                    class="font-medium">อุบลราชธานี</span><br>กำลังศึกษาอยู่ที่ <span
                    class="font-medium">HomeSchool</span></p>
                <p class="pt-4 text-white opacity-70 font-light">อะไรคือ <span class="font-medium">ELF</span> ?<br><span
                    class="font-medium">ELF </span>หรือ<span class="font-medium"> Ellafern </span>
                  คือนามแฝงสำหรับการใช้รับงานต่างๆ<br>ที่เกี่ยวกับการ
                  Programing เช่น Website, Application, หรือ
                  Game<br>สร้างขึ้นเพื่อบริการในด้าน IT
                  ทั้งซัพพอร์ตและลงมือหน้างาน<br>และยังมีอีกหลายๆอย่างที่เรารับแต่เราจะยกหลักๆมาประมาณนี้</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div id="mywork" class="container mx-auto">
      <div class="mt-5 mx-3">
        <h1
          class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-100 via-pink-300 to-pink-700">
          MYWORK</h1>
        <p class="p-0 -mt-1 text-white opacity-50">ผลงานคร่าวๆ ที่ลูกค้าได้ไว้ใจเราในการจัดการ</p>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-2 p-4">
          <div class="relative overflow-hidden group transition hover:scale-105 duration-300">
            <div class="bg-white/30 absolute h-11 w-full -rotate-45 -left-80 group-hover:left-80 transition-all duration-1000 opacity-0 bottom-[80%] group-hover:bottom-0 group-hover:opacity-100"></div>
            <a href="https://devilnoob.com/" target="_blank"><img src="https://media.discordapp.net/attachments/803211285797535755/1049708059418697758/p_1.png" class="rounded"></a>
          </div>
          <div class="relative overflow-hidden group transition hover:scale-105 duration-300">
              <div class="bg-white/30 absolute h-11 w-full -rotate-45 -left-80 group-hover:left-80 transition-all duration-1000 opacity-0 bottom-[80%] group-hover:bottom-0 group-hover:opacity-100"></div>
              <a href="https://shopgame-th.com/" target="_blank"><img src="https://media.discordapp.net/attachments/803211285797535755/1049708066569982042/p_2.png" class="rounded"></a>
          </div>
          <div class="relative overflow-hidden group transition hover:scale-105 duration-300">
              <div class="bg-white/30 absolute h-11 w-full -rotate-45 -left-80 group-hover:left-80 transition-all duration-1000 opacity-0 bottom-[80%] group-hover:bottom-0 group-hover:opacity-100"></div>
              <a href="http://porthemaster.com/" target="_blank"><img src="https://media.discordapp.net/attachments/803211285797535755/1049708078876086352/p_3.png" class="rounded"></a>
          </div>
          <div class="relative overflow-hidden group transition hover:scale-105 duration-300">
              <div class="bg-white/30 absolute h-11 w-full -rotate-45 -left-80 group-hover:left-80 transition-all duration-1000 opacity-0 bottom-[80%] group-hover:bottom-0 group-hover:opacity-100"></div>
              <a href="https://papatopup.com/" target="_blank"><img src="https://media.discordapp.net/attachments/803211285797535755/1049708093124120597/p_4.png" class="rounded"></a>
          </div>
        </div>
        </div>
      </div>
      
    <div class="container mx-auto">
      <div class="mt-5 mx-3">
        <h1
          class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-100 via-pink-300 to-pink-700">
          PRIVATE WORK
          </h1>
        <p class="p-0 -mt-1 text-white opacity-50">ผลงานส่วนตัว</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2 p-4">
          <div class="relative overflow-hidden group transition duration-300">
            <div class="bg-white/30 absolute h-11 w-full -rotate-45 -left-80 group-hover:left-80 transition-all duration-1000 opacity-0 bottom-[80%] group-hover:bottom-0 group-hover:opacity-100"></div>
            <a href="https://waifu.ellafern.net/" target="_blank"><img src="https://media.discordapp.net/attachments/803211285797535755/1049708098668998656/p_5.png" class="rounded"></a>
          </div>
          <div class="relative overflow-hidden group transition duration-300">
            <div class="bg-white/30 absolute h-11 w-full -rotate-45 -left-80 group-hover:left-80 transition-all duration-1000 opacity-0 bottom-[80%] group-hover:bottom-0 group-hover:opacity-100"></div>
            <a href="https://world.ellafern.net/" target="_blank"><img src="https://media.discordapp.net/attachments/803211285797535755/1049708103249170462/p_6.png" class="rounded"></a>
          </div>
        </div>
        </div>
      </div>


    <footer class="footer items-center p-4 bg-black text-neutral-content">
      <div class="items-center grid-flow-col">
        <p>© {{ new Date().getFullYear() }} - All right reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

let comp = document.querySelector(".comp"),
   run = document.querySelector(".run"),
   usd = 11380;

function cardRender() {
   products.splice(-20).forEach((e) => {
      let card = document.createElement("div");

      card.setAttribute(
         "class",
         "card rounded-xl w-[230px] min-h-[400px] bg-white pt-[25px]"
      );

      card.innerHTML = `
         <p class="absolute text-sm mt-[-14px] py-[2px] ml-3 bg-yellow-400 text-white px-3 rounded-[8px]">Chegirma</p>      

         <img src="${e.thumbnail}" alt="img" class="h-[180px] mx-auto w-full">
      
         <h6 class="text-[16px] pl-2 pt-1 text-purple-700 line-through">${e.price * usd} so'm</h6>
         <h5 class="text-[20px] pl-2 text-blue-700">${Math.floor((e.price - e.discountPercentage) * usd)} so'm</h5>
         <h4 class="text-[15px] w-[200px] pl-4">${e.title}</h4>
         <p class="text-[14px] pl-6  text-gray-500">${e.brand}</p>
         <p class="text-[18px] text-end pr-3 pt-[5px] text-green-700">${e.stock} ta qoldi</p>

         <strong class="absolute ml-[185px] ">
            <p class="text-[16px] mt-[8px] font-semibold ml-[-20px]">${e.rating} </p>
            <span class="absolute"><i class='bx bxs-star-half text-sm mt-[-23px] ml-4 absolute'></i></span>
         </strong>
         <p class="text-sm pl-5 mt-2">${e.category}</p>

         <button id="btn" class="bg-blue-600 mb-3 active:bg-blue-900 rounded-lg px-6 text-[16px] py-[11px] ml-5 mt-3 text-white">Sotib olish</button>

         <span class="ml-[25px]">
            <i class='bx bx-cart-alt'></i>
         </span>
      
      `

      comp.append(card);
   });
};

cardRender();


function renderCard() {
   products.forEach((e) => {
      let card = document.createElement("div");

      card.setAttribute(
         "class",
         "card rounded-xl w-[230px] min-h-[390px] bg-white pt-[25px]"
      );

      card.innerHTML = `
         <p class="absolute text-sm mt-[-14px] py-[2px] ml-3 bg-red-500 text-white px-3 rounded-[8px]">Chegirma</p>      

         <img src="${e.thumbnail}" alt="img" class="h-[180px] mx-auto w-full">
      
         <h6 class="text-[16px] pl-2 pt-1 text-purple-700 line-through">${e.price * usd} so'm</h6>
         <h5 class="text-[20px] pl-2 text-blue-700">${Math.floor((e.price - e.discountPercentage) * usd)} so'm</h5>
         <h4 class="text-[15px] w-[200px] pl-4">${e.title}</h4>
         <p class="text-[14px] pl-6  text-gray-500">${e.brand}</p>
         <p class="text-[18px] text-end pr-3 pt-[5px] text-green-700">${e.stock} ta qoldi</p>

         <strong class="absolute ml-[185px] ">
            <p class="text-[16px] mt-[8px] font-semibold ml-[-20px]">${e.rating} </p>
            <span class="absolute"><i class='bx bxs-star-half text-sm mt-[-23px] ml-4 absolute'></i></span>
         </strong>
         <p class="text-sm pl-5 mt-2">${e.category}</p>

         <button id="btn" class="bg-blue-600 mb-3 active:bg-blue-900 rounded-lg px-6 text-[16px] py-[11px] ml-5 mt-3 text-white">Sotib olish</button>

         <span class="ml-[25px]">
            <i class='bx bx-cart-alt'></i>
         </span>
      
      `

      run.append(card)
   });
};

renderCard();
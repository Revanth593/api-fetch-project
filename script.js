var container = document.getElementById("contain");

async function foo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    for (var i = 0; i < result.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="row row-cols-1 row-cols-md-1 g-4">
           <div class="col">
             <div class="card">
               <div class="card-body text-bg-info p3">
                 <h5 class="card-title">Name : "${result[i].name}"</h5>
                 <p class="card-text">Email : "${result[i].email}"</p>
                 <p class="card-text"> Street : "${result[i].address.street}"</p>
                 <p class="card-text"> City :"${result[i].address.city}"</p>
               </div>
             </div>
           </div>
         </div>`;
      container.append(div);
    }
  } catch (error) {
    console.log(error);
  }
}

foo();

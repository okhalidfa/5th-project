let currentab= "all";
let allc, oc, cc,counts;

let allIssues = [];

function up(){
    counts ={
       all: allc.children.length,
       open: oc.children.length,
       closed: cc.children.length,
    };
    con.innerText= counts[currentab];

}



function stab(tab){
  console.log(tab);
  currentab = tab
  const tabs= ["all","open", "closed"];
  const tac= ["bg-primary", "text-white", "border-primary"]
  const tin= ["bg-transparent","border-slate-200"];
  for (const t of tabs ){
        const tr= document.getElementById(t);
        if (t==tab){
            console.log("lkj")
            tr.classList.add(...tac);
            tr.classList.remove(...tin);

        }else{
            tr.classList.remove(...tac);
            tr.classList.add(...tin);
        }
  }
  [allc, oc, cc].forEach(s => s.classList.add("hidden"));
  if(tab=="all"){
    allc.classList.remove("hidden");
  } else if(tab=="open"){
    oc.classList.remove("hidden");
  } else {
    cc.classList.remove("hidden")
  }
  up()


  
    
}
document.addEventListener("DOMContentLoaded", () => {
    allc = document.getElementById("all-c");
    oc = document.getElementById("i-c");
    cc = document.getElementById("r-c");
    con = document.getElementById("co")
    stab("all");


});


const lcard = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => discard(json.data));

};
lcard();

const discard = (les) => {
    const lcon = document.getElementById("all-c")
    allIssues = les;
    renderIssues(les);
    lcon.innerHTML ="";
    
//     {
//   "status": "success",
//   "message": "Issues fetched successfully",
//   "data": [
//     {
//       "id": 1,
//       "title": "Fix navigation menu on mobile devices",
//       "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//       "status": "open",
//       "labels": [
//         "bug",
//         "help wanted"
//       ],
//       "priority": "high",
//       "author": "john_doe",
//       "assignee": "jane_smith",
//       "createdAt": "2024-01-15T10:30:00Z",
//       "updatedAt": "2024-01-15T10:30:00Z"
//     },
    for (let los of les){
        const bdiv = document.createElement("div");
        bdiv.innerHTML = `
                <div onclick='openModal(${JSON.stringify(los)})'
                     class="cursor-pointer bg-white border border-slate-200 shadow rounded 
                     ${los.status == "open" ? "border-t-green-500 border-t-4" : "border-t-violet-500 border-t-4"}">

                    <div class="border-b h-52 border-slate-200 p-6">
                    <div class="flex justify-between">
                        ${los.status == "open"
                            ? `<img src="/style/assets/Open-Status.png">`
                            : `<img src="/style/assets/Closed- Status .png">`
                        }
                        <span class="text-xs font-semibold">${los.priority}</span>
                    </div>

                    <h4 class="text-sm font-semibold pt-2">${los.title}</h4>
                                <p class="text-slate-400 py-1 text-xs">${los.description}</p>

                    <div class="flex gap-2 mt-1">
                        <span class="px-2 py-1 text-xs bg-red-100 text-red-500 rounded-full">${los.labels[0]}</span>
                        <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">${los.labels[1]}</span>
                    </div>
                </div>

                <p class="pl-6 text-slate-400 text-sm">#${los.id} by ${los.author}</p>
            </div>
        `;
        lcon.append(bdiv);



        if (los.status == "open") {
            oc.appendChild(bdiv.cloneNode(true));
        } else {
            cc.appendChild(bdiv.cloneNode(true));
        }
    }

    up();
};

function openModal(data) {
  document.getElementById("modalOverlay").classList.remove("hidden");
  document.getElementById("modalOverlay").classList.add("flex");

  document.getElementById("m-title").innerText = data.title;
  document.getElementById("m-desc").innerText = data.description;
  document.getElementById("m-assignee").innerText = data.assignee;
  document.getElementById("m-priority").innerText = data.priority;
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}
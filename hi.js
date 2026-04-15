let currentab= "all";
let allc, oc, cc,counts;



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

const discrad = (les) => {
    const lcon = document.getElementById("all-c")
    lcon.innerHTML ="";

    const div = document.createElement("div");
    
    

}

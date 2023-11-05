// const btn = document.getElementById('btn')
// const inp = document.getElementById('inp')
// const productDiv = document.getElementById('products') 

// AXIOS GET METHOD

// axios.get("https://northwind.vercel.app/api/customers")
// .then ((res) => {
//     console.log(res.data);
// })

// AXIOS POST METHOD

// function salam() {
//     axios.post("https://northwind.vercel.app/api/customers",{
//         name: inp.value,
 
//     })
//     .then((res) => {
//         console.log("datagonderildi");
//     });
// }
// btn.addEventListener('click',salam)

// AXIOS DELETE

// function axiosDelete () {
//     axios.delete(`https://northwind.vercel.app/api/customers/${inp.value}`)
// }
// btn.addEventListener('click',axiosDelete)


// FETCH GET METHOD


// function GET() {
//     fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data=>{
//        data.forEach(item => {
//         const p = document.createElement('p')
//         p.innerText = item.companyName
//         productDiv.appendChild(p)
//        });
//     })
// }
// window.onload = () =>{
//     GET()
// }


// FETCH POST METHOD
 

// function post() {
//     fetch('https://northwind.vercel.app/api/customers',{
//         method: "POST",
//         headers:
//         {
//             "Content-Type":"application/json",
//         },
//         body: JSON.stringify({
//             name: inp.value
//         }),
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });

// }
//  btn.addEventListener('click',post)


// FETCH DELETE METHOD

// function fetchDELETE() {
//     fetch(`https://northwind.vercel.app/api/customers/${inp.value}`,{
//         method: "DELETE",
//     }).then((res) => console.log(res));
// }

// btn.addEventListener('click',fetchDELETE)


//  btn.addEventListener('click',update)
//  function update(salam) {
//     fetch(`https://northwind.vercel.app/api/customers/${inp.value}`,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"applicion/json"
//         },
//         body:JSON.stringify(salam)
//     })
    
//  }
// const salam = {
//     name: "QUBALI",
// }
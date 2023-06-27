const divCard = document.querySelector(".cardUser");
const change = document.getElementById("change");
console.log(divCard);
let index = 0;

const usersInfo = async () => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=1`);
    const data = await response.json();
    console.log(data.data[0]);
    // let randomNumber = Math.floor(Math.random() * 7);
    for (let i = 0; i < 7; i++) {
      const name = data.data[i].last_name;
      const surname = data.data[i].first_name;
      const avatar = data.data[i].avatar;
      const email = data.data[i].email;
      const id = data.data[i].id;
      const newDiv = document.createElement("div");
      newDiv.classList.add("usercard");
      newDiv.innerHTML = `<img src="${avatar}" alt=""></img>
      <p>${name} ${surname}</p>
      <p>email :</p><p>${email}</p>
      <p>id :${id}</p>
      `;

      divCard.appendChild(newDiv);
    }
    //   console.log(e);
    //   console.log(randomNumber);
    //   divCard.innerHTML =
  } catch (error) {
    console.log(error);
  }
};

usersInfo();
// console.log(randomNumber);

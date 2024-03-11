//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

fetch("https://api.github.com/users")
  .then((response) => {
    console.log(response);
    //! Error handling
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  })
  .then((data) => updateDOM(data))
  .catch((hata) => console.log(hata));

const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");
  users.forEach((user) => {
    const { login, avatar_url, type } = user;
    userDiv.innerHTML += ` <h2>${login}</h2>
    <img src="${avatar_url}" width="300px" />
    <p>${type}</p>
    <br/>
    `;
  });
};

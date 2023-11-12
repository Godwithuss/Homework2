const fnameIcon = document.getElementById("fnameIcon");
const fname = document.getElementById("fname");
const lnameIcon = document.getElementById("lnameIcon");
const lname = document.getElementById("lname");
const phoneIcon = document.getElementById("phoneIcon");
const phone = document.getElementById("phone");
const descIcon = document.getElementById("descIcon");
const desc = document.getElementById("desc");
const deliveryIcon = document.getElementById("deliveryIcon");
const delivery = document.getElementById("delivery");
const billingIcon = document.getElementById("billingIcon");
const billing = document.getElementById("billing");

let profileData = {
  fname: fname.value,
  lname: lname.value,
  phone: phone.value,
  desc: desc.value,
  delivery: delivery.value,
  billing: billing.value,
};
let profileDataFromStorage = JSON.parse(
  window.localStorage.getItem("profileData")
);
function setProfileData() {
  if (profileDataFromStorage) {
    fname.value = profileDataFromStorage.fname;
    lname.value = profileDataFromStorage.lname;
    phone.value = profileDataFromStorage.phone;
    desc.value = profileDataFromStorage.desc;
    delivery.value = profileDataFromStorage.delivery;
    billing.value = profileDataFromStorage.billing;
  } else {
    window.localStorage.setItem("profileData", JSON.stringify(profileData));
  }
}

setProfileData();

console.log(profileDataFromStorage);

{
  /* <i class="fa-solid fa-check"></i>; */
}
fnameIcon.addEventListener("click", () => {
  if (fname.hasAttribute("readonly")) {
    fname.removeAttribute("readonly");
    fname.classList.add("border");
    fnameIcon.classList.remove("fa-pencil");
    fnameIcon.classList.add("fa-check");
    fnameIcon.style.color = "green";
  } else {
    fnameIcon.classList.add("fa-pencil");
    fnameIcon.classList.remove("fa-check");
    fnameIcon.style.color = "black";
    fname.classList.remove("border");
    fname.setAttribute("readonly", "readonly");
    profileDataFromStorage = { ...profileDataFromStorage, fname: fname.value };
    window.localStorage.removeItem("profileData");
    window.localStorage.setItem(
      "profileData",
      JSON.stringify(profileDataFromStorage)
    );

    updateUserData(profileDataFromStorage);
  }
});

lnameIcon.addEventListener("click", () => {
  if (lname.hasAttribute("readonly")) {
    lname.removeAttribute("readonly");
    lname.classList.add("border");
    lnameIcon.classList.remove("fa-pencil");
    lnameIcon.classList.add("fa-check");
    lnameIcon.style.color = "green";
  } else {
    lnameIcon.classList.add("fa-pencil");
    lnameIcon.classList.remove("fa-check");
    lnameIcon.style.color = "black";
    lname.classList.remove("border");
    lname.setAttribute("readonly", "readonly");
    profileDataFromStorage = { ...profileDataFromStorage, lname: lname.value };
    window.localStorage.removeItem("profileData");
    window.localStorage.setItem(
      "profileData",
      JSON.stringify(profileDataFromStorage)
    );
    updateUserData(profileDataFromStorage);
  }
});

phoneIcon.addEventListener("click", () => {
  if (phone.hasAttribute("readonly")) {
    phone.removeAttribute("readonly");
    phone.classList.add("border");
    phoneIcon.classList.remove("fa-pencil");
    phoneIcon.classList.add("fa-check");
    phoneIcon.style.color = "green";
  } else {
    phoneIcon.classList.add("fa-pencil");
    phoneIcon.classList.remove("fa-check");
    phoneIcon.style.color = "black";
    phone.classList.remove("border");
    phone.setAttribute("readonly", "readonly");
    profileDataFromStorage = { ...profileDataFromStorage, phone: phone.value };
    window.localStorage.removeItem("profileData");
    window.localStorage.setItem(
      "profileData",
      JSON.stringify(profileDataFromStorage)
    );
    updateUserData(profileDataFromStorage);
  }
});

descIcon.addEventListener("click", () => {
  if (desc.hasAttribute("readonly")) {
    desc.removeAttribute("readonly");
    desc.classList.add("border");
    descIcon.classList.remove("fa-pencil");
    descIcon.classList.add("fa-check");
    descIcon.style.color = "green";
  } else {
    descIcon.classList.add("fa-pencil");
    descIcon.classList.remove("fa-check");
    descIcon.style.color = "black";
    desc.classList.remove("border");
    desc.setAttribute("readonly", "readonly");
    profileDataFromStorage = { ...profileDataFromStorage, desc: desc.value };
    window.localStorage.removeItem("profileData");
    window.localStorage.setItem(
      "profileData",
      JSON.stringify(profileDataFromStorage)
    );
    updateUserData(profileDataFromStorage);
  }
});

deliveryIcon.addEventListener("click", () => {
  if (delivery.hasAttribute("readonly")) {
    delivery.removeAttribute("readonly");
    delivery.classList.add("border");
    deliveryIcon.classList.remove("fa-pencil");
    deliveryIcon.classList.add("fa-check");
    deliveryIcon.style.color = "green";
  } else {
    deliveryIcon.classList.add("fa-pencil");
    deliveryIcon.classList.remove("fa-check");
    deliveryIcon.style.color = "black";
    delivery.classList.remove("border");
    delivery.setAttribute("readonly", "readonly");
    profileDataFromStorage = {
      ...profileDataFromStorage,
      delivery: delivery.value,
    };
    window.localStorage.removeItem("profileData");
    window.localStorage.setItem(
      "profileData",
      JSON.stringify(profileDataFromStorage)
    );
    updateUserData(profileDataFromStorage);
  }
});

billingIcon.addEventListener("click", () => {
  if (billing.hasAttribute("readonly")) {
    billing.removeAttribute("readonly");
    billing.classList.add("border");
    billingIcon.classList.remove("fa-pencil");
    billingIcon.classList.add("fa-check");
    billingIcon.style.color = "green";
  } else {
    billingIcon.classList.add("fa-pencil");
    billingIcon.classList.remove("fa-check");
    billingIcon.style.color = "black";
    billing.classList.remove("border");
    billing.setAttribute("readonly", "readonly");
    profileDataFromStorage = {
      ...profileDataFromStorage,
      billing: billing.value,
    };
    window.localStorage.removeItem("profileData");
    window.localStorage.setItem(
      "profileData",
      JSON.stringify(profileDataFromStorage)
    );
    updateUserData(profileDataFromStorage);
  }
});

async function createUser() {
  const userData = {
    fname: fname.value,
    lname: lname.value,
    phone: phone.value,
    desc: desc.value,
    delivery: delivery.value,
    billing: billing.value,
  };
  const res = await fetch("http://127.0.0.1:5000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const response = await res.json();
  console.log(response);
  if (response.data) {
    window.localStorage.setItem(
      "user_id",
      JSON.stringify(response.data.user_id)
    );
  } else {
    // window.alert(res.status);
  }
}
// createUser();

async function updateUserData(data) {
  const user_id = window.localStorage.getItem("user_id");
  console.log(user_id);
  if (user_id) {
    const res = await fetch(`http://127.0.0.1:5000/api/user/${user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else {
    // window.alert("No user id found!");
  }
}

// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};
//JS Docs 표준문법
/**
 * @typedef {object} Address
 * @property {string}street
 * @property {string}city
 */
/**
 * //type definition
 * @typedef {object} User
 * @property {string}name
 * @property {string}email
 * @property {Address}address
 *
 */
/**
 *
 * @returns {Promise<User>}
 */

function fetchUser() {
    return axios.get(url);
}
fetchUser();
console.log(fetchUser());
function startApp() {
    // axios
    //     .get(url)
    fetchUser()
        .then(function (response) {
            response.console.log(response);

            user = response.data;
            // TODO: 이름, 이메일, 주소 표시하기
            // console.log("user", user);
            username.innerText = user.name;
            email.innerText = user[0].email;
            address.innerText = user[0].address.street;
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();

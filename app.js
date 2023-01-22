// Import the functions you need from the SDKs you need
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase,
    ref,
    set,
    push,
     onValue,
      update,
       remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCiEzrEDFN2b7pdrDttRT5vXp2myWNVi6M",
    authDomain: "application-3d3af.firebaseapp.com",
    projectId: "application-3d3af",
    storageBucket: "application-3d3af.appspot.com",
    messagingSenderId: "453360842354",
    appId: "1:453360842354:web:c769762a66f2b38eff34eb",
    measurementId: "G-98FL0JL7TD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 const db = getDatabase();

//FIreBase Khtm//

var todoo = document.getElementById("a");

window.addTodo   = function() {
    var obj = {
        todo: todoo.value,
    }

    var Userref = push(ref(db, 'Todos/'))
    obj.id = Userref.key

    set(Userref, obj)
}


window.get = function () {
    var render = document.getElementById('render')

    onValue(ref(db, 'Todos/'), function (todo) {
        render.innerHTML = ""
        var Todos = Object.values(todo.val())
        for (var i = 0; i < Todos.length; i++) {
            var app = Todos[i]
            console.log(app.todo)
            render.innerHTML += `<p class="text-center d-flex justify-content-evenly ms-3 pt-4">TODO : ${app.todo}   <button onclick="TodoupDate('${app.id}')" class="btn bg-success p-2 px-5  text-light">EDIT</button>
    <button onclick="Tododel('${app.id}')" class="btn bg-success text-center p-2 px-5  text-light">DELETE</button> </p> <br/>`

        }
    var a = document.getElementById('a').value = ""

    })
}
get()

window.Tododel = function (id) {
    remove(ref(db, `Todos/${id}`))
}
window.deleteAll = function () {
    remove(ref(db, `Todos/`))
}

window.TodoupDate = function (id) {
    // console.log(id);
    var NewTodo = prompt('Enter Update')

   update(ref(db, `Todos/${id}`), {
        todo: NewTodo
    })
  
}
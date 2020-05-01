$(function () {
    // import { userObj } from 'userId.js'
    let globalUserID = sessionStorage.getItem('uuid')
    console.log(`loading using the object id: ${globalUserID} `)
   
    $.ajax(`/api/user/${globalUserID}/application/all`, {
        type: "GET"
    }).then(function (resp) {
        // console.log(resp)
        $("#app-append").append(resp)
        // $(document).html(resp)
    })

    $(document).on("click", ".edit-app", function(event){
        event.preventDefault();
        // window.location.replace("/applications");
        var id = $(".edit-app").data("appId");
        console.log(`the application that you selected is: ${id}`)

    })


})
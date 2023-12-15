var userinformation = document.getElementById('details-of-the-user');
var displayuserdetails = document.getElementById('displayingdetailsoftheuser');

userinformation.addEventListener('submit', function (event) {

    event.preventDefault();
    var chooseexperiment = document.getElementById('chooseexperiment').value
    var choosedescription = document.getElementById('choosedescription').value
    var chooseexpenses = document.getElementById('expenses').value


    var newobj = {
        chooseexperiment: chooseexperiment,
        choosedescription: choosedescription,
        chooseexpenses: chooseexpenses

    };

    var passing = JSON.stringify(newobj);


    var object = 'displayuserdetails_' + chooseexperiment;


    localStorage.setItem(object, passing);

    displaydetails(chooseexperiment);

});
function displaydetails(chooseexperiment) {
    var newobj = 'displayuserdetails_' + chooseexperiment;
    var userdetails = localStorage.getItem(newobj);

    if (userdetails) {

        var information = JSON.parse(userdetails);

        var userdetailsdisplaying = document.createElement('div');
        userdetailsdisplaying.classList.add('displayingdetailsoftheuser');

        var combine = information.chooseexperiment + ' - ' + information.choosedescription + ' - ' + information.chooseexpenses ;

        var output = document.createElement('span');
        output.textContent = combine;



        var remove = document.createElement('button');
        remove.textContent = 'DELETE';

        remove.addEventListener('click', function () {
            localStorage.removeItem(newobj);
            userdetailsdisplaying.remove();

        });

        var edit=document.createElement('button');
        edit.textContent='EDIT';

        edit.addEventListener('submit',function(){
             
            var name=document.getElementById('chooseexperiment').value=information.chooseexperiment;
            var descript=document.getElementById('choosedescription').value=information.choosedescription;
            var exp=document.getElementById('chooseexpenses').value=information.chooseexpenses;
            
        });

        
        userdetailsdisplaying.appendChild(output);
        userdetailsdisplaying.appendChild(remove);
        userdetailsdisplaying.appendChild(edit);


        
        displayuserdetails.appendChild(userdetailsdisplaying);


        return userdetailsdisplaying;
    }
}
/**
 * Created by Nitesh on 10/11/15.
 */
Template.body.events({
    'click #settings': function (e) {
        e.preventDefault();
        $('#form-div').modal('show');
    }
});
Template.body.events({
    'click .glyphicon-remove': function (e) {
        e.preventDefault();
        $('#form-div').modal('hide');
    }
});
/*
Template.body.events({
    'click #cancel_btn': function (e) {
        e.preventDefault();
        $('#form-div').modal('hide');
    }
});
*/
Template.getinfo.helpers({
    isFirstTimeUser: function () {
        return  Meteor.users.find({_id: Meteor.userId(), cancerType: { $exists: false} })
    }
});
Template.body.events({
    "submit .new-task": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var personName = event.target.personName.value;
        var personAge = event.target.personAge.value;
        var cancerType = event.target.cancerType.value;
        var gender = event.target.gender.value;

        // Insert a task into the collection

        if (Meteor.userId()) {
            var flag = false;
            Meteor.users.update({_id: Meteor.userId()},
                {
                    $set: {
                        'profile.name': personName,
                        'profile.age': personAge,
                        'profile.cancerType': cancerType,
                        'profile.gender': gender
                    }
                });
            $('#form-div').modal('hide');
        }
        //$('#form-div').modal('hide');
    }
});


var StudentSvc = (function(){
    var student = {name: 'Shibu', website: 'hhtps://codewithdot.net'};
    return{
        GetStudent: function(studentId){
            return student;
        }
    }
})();

var GetStudent = function(studentId){
    var student = StudentSvc.GetStudent(studentId);
    return student;
}

exports.GetStudent = GetStudent;
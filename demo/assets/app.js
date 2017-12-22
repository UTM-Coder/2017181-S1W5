var sum = function(number1, number2) {
	return number1 + number2;
}

var sum_of_element = function(array) {
	let ans = 0;
	for(i = 0; i < array.length; i++) {
		ans += array[i];
	}
	return ans;
}

function CreateUser(username, password){
    let count = 0;
    let myUsername = username;
    let myPassword = password;
    return {
        getCount : function(){
            return count;
        },
        addCount : function(password){
        	if(password == myPassword) count++;
        	else return 'rejected';
        },
        resetCount : function(){
            count = 0;
        }
    }
};
/*
QUESTION
Given an array 'cars'.Group data so that objects with similar key are not put into the same group(array).Array objects with same make are not put into the same group.

EXAMPLE

BEFORE SORTING

var cars = [
{
    'make': 'audi',
    'model': 'r8',
    'year': '2012'
}, {
    'make': 'audi',
    'model': 'rs5',
    'year': '2013'
}, {
    'make': 'ford',
    'model': 'mustang',
    'year': '2012'
}, {
    'make': 'ford',
    'model': 'fusion',
    'year': '2015'
}, {
    'make': 'kia',
    'model': 'optima',
    'year': '2012'
},
];

AFTER SORTING

var cars = {
'class_1': [
    {   'make' : 'audi',
        'model': 'r8',
        'year': '2012'

    },{ 'make' : 'ford',
        'model': 'mustang',
        'year': '2012'
    },{
        'make': 'kia',
        'model': 'optima',
        'year': '2012'
      }
],


'class_2': [
    {
        'make' : 'audi',
        'model': 'rs5',
        'year': '2013'
    },{
        'make': 'ford',
        'model': 'fusion',
        'year': '2015'
    }
]
}

*/

const cars = [{"make":"audi","model":"r8","year":"2012"},{"make":"audi","model":"rs5","year":"2013"},{"make":"ford","model":"mustang","year":"2012"},{"make":"ford","model":"fusion","year":"2015"},{"make":"kia","model":"optima","year":"2012"}];

const helper = [];

const result = cars.reduce((r, o) => {

	let i = helper.findIndex((g) => !g[o.make]); //find if helper array has no no object with this make

	//find index returns -1 if condition evaluates to false
	if (i === -1) { //if no group with this make exists

		i = helper.push({ [o.make]: true });
		r[`class_${i}`] = [o];//add the object with its make to class 1

	}else { //group with make exists

		r[`class_${i + 1}`].push(o); //create new group
		//push object into new group.
		helper[i][o.make] = true;

	}

	return r;
}, Object.create(null));



console.log(result);



































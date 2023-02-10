var cities, cityToCheck, upper, lower, merge, check, lower1, upper1;
cities = ['Karachi', 'Lahore', 'Quetta', 'Islamabad'];
cityToCheck = prompt("Please enter city", "islamabad");
check = false;
upper = cityToCheck.slice(0,1);
lower = cityToCheck.slice(1);
upper1 = upper.toUpperCase();
lower1 = lower.toLowerCase();
merge = upper1+lower1;

for(i=0; i<cities.length; i++){

    if(merge === cities[i]){
        check = true;
    }

}

if(check === true){
    document.write("City found");
}
else{
    document.write("city not found")
}
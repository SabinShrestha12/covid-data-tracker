let app = angular.module('covid_records',[]);
const url = "https://disease.sh/v3/covid-19/all";

let url_a = "https://disease.sh/v3/covid-19";
app.controller('data',($scope,$http,$interval)=>
{
	let image = {
		name : 'stay safe',
		source : 
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQp3LVW5Eg6mssdK8uTIIp-86Eovew30yMyA&usqp=CAU',
	};
	$scope.message = "Stay-at-home directives are issued to protect you, your family, and the public at large. Do your part by staying home. Now is not the time for a play date for kids, not the time for a dinner for adults, and not the time for a personal visit to the elderly. Spring break plans should be cancelled, birthday parties should be postponed, extended family dinners should be suspended. If the NBA can cancel their basketball games, you can cancel your in-person social calendar. Please, stay home.";
	$scope.img = image;
	$scope.total_cases = "Total Active Cases";
	$scope.recovered_cases = "Recovered Cases";
	$scope.total_deaths = "Total Deaths";

	// api part

		function all_data() { $http.get(url).then((response)=>{
		console.log(response.data);
		$scope.total_count = response.data;
	},(error)=>{
		consolelog(error);
	})};
	
	// $interval(covid_data(),1000);

	//country data

	 let calc_data = $scope.get_data = ()=>
	{
		let country = $scope.cnt_name;
		if(country==''|| country==null)
		{
			return;
		}
		else
		{
			$http.get(`${url_a}/countries/${country}`).then((response)=>{
				//success
				console.log(response);
				$scope.test_count = response.data;
				let test_count = response.data;
			} , (error)=>{
				//error
				console.log(error);
			})
		}
	};
	$interval(all_data,1000);
	$interval(calc_data,1000);
});
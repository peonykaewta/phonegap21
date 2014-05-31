function HomeCtrl ($scope) {
	// body...
	$scope.is_show_grade = false;
	$scope.calculate = function()
	{
		$scope.is_show_grade = true;
		// if($scope.score == 0)
		// 	$scope.grade = "F"
		// else
		// 	$scope.grade = "P";
	// 	if(($scope.score >=80)&&($scope.score<=100)) { $scope.grade= "A" ; }
	// else if (($scope.score>=70)&&($scope.score<=79)) { $scope.grade= "B" ; }
	// else if (($scope.score>=60)&&($scope.score<=69)) { $scope.grade= "C" ; }
	// else if (($scope.score>=50)&&($scope.score<=59)) { $scope.grade= "D" ; }
	// else if (($scope.score>=0)&&($scope.score<=49)) { $scope.grade= "F" ; }
	// else{imposible}
	if($scope.score == 0)
		$scope.grade = "F"
	if($scope.score > 100 || $scope.score < 0)
			$scope.grade = "Impossible"
		else if($scope.score >= 80)
			$scope.grade = "A";
		else if($scope.score >= 70)
			$scope.grade = "B";
		else if($scope.score >= 60)
			$scope.grade = "C";
		else if($scope.score >= 50)
			$scope.grade = "D";
		else
			$scope.grade = "P";
			$scope.grade = "F";
	}
	$scope.add = function(){
		$scope.is_show_value = true;
		$scope.value= ($scope.first + $scope.second);
		
	}
	$scope.minus = function(){
		$scope.is_show_value = true;
		$scope.value= ($scope.first - $scope.second);
	}
	$scope.multiply = function(){
		$scope.is_show_value = true;
		$scope.value= ($scope.first * $scope.second);
	}
	$scope.divide = function(){
		$scope.is_show_value = true;
		$scope.value= ($scope.first / $scope.second);
	}




}


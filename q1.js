function sortedArr(arr){
	let maxIndex=arr.length-1, minIndex=0, maxElem=arr[arr.length -1] + 1
	for(let i=0;i<arr.length;i++){
		if(i%2 == 0){
			arr[i] +=(arr[maxIndex] % maxElem) * maxElem
			maxIndex--
		}
		else{
			arr[i] +=(arr[minIndex] % maxElem) * maxElem
			minIndex++
		}
	}
	for(let i=0; i<arr.length;i++){
		arr[i]=Math.floor(arr[i]/maxElem)
		console.log(arr[i]+" ")
	}

}

sortedArr([2, 4, 6, 8, 10])

//Time complexity of O(1) Extra Space
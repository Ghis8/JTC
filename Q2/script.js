class Product{
	constructor(coffee,add_on,qte){
		this.coffee=coffee
		this.qte=qte
		this.add_on=add_on
	}

}

class Coffee extends Product{
	
	constructor(coffee,add_on,qte,price,results){
		super(coffee,add_on,qte)
		this.price=price
		this.results=results
	}
	getCoffee(){
		let result
		switch(this.coffee){

			//Expresso
			case 'Expresso':
				if(this.add_on == 'Milk'){
					result=60 * this.qte
				}
				if(this.add_on == 'Cream')
					result=75 * this.qte
				if(this.add_on == 'Latte')
					result=100*this.qte

			break;
			

			// Cappuchino
			case 'Cappuccino':
				if(this.add_on == 'Milk')
					result=80*this.qte
				if(this.add_on == 'Cream')
					result=90*this.qte
				if(this.add_on == 'Latte')
					result=125*this.qte
			break;
			

			//Latte
			case 'Latte':
				if(this.add_on == 'Milk')
					result=100*this.qte
				if(this.add_on == 'Cream')
					result=125*this.qte
				if(this.add_on == 'Latte')
					result=150 * this.qte
			break;
			
		}
		this.results=[] 
		this.results.push(result)
		console.log(this.results)
		
		return (`The ${this.coffee} with ${this.add_on} X ${this.qte}: ${result}`)
		
	}
	
}

function handleSubmit(){
	
	//get html values c stands for (coffee) a for (Add_on) and q for quantity

	//first input 
	let c1=document.getElementById('c1').value
	let cq1=document.getElementById('cq1').value
	let a1=document.getElementById('a1').value

	
	

	let node=document.createElement('span')
	if(c1 && a1 && cq1 ){
		let c=new Coffee(c1,a1,cq1)
		const textNode=document.createTextNode(c.getCoffee())
		node.appendChild(textNode)
		document.getElementById
		document.getElementById('sum').appendChild(node)
		
		document.getElementById('total').innerHTML=c.results

	}else if(!cq1){
		alert("Enter number of cups please for the first selection")
	}
	


	return false
}


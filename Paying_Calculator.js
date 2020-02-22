// Part-time job calcurator


var JobProfile = function(wage, transpotation){
	this.baseWage = wage;
	this.t_cost = transpotation;
	
	this.hours = [];
	this.ratio = [];
	for(let k = 0; k < JobProfile.days.length; k++){
		this.hours[k] = 0;
		this.ratio[k] = 1;
	}
	
	
	this.getPay = function(year, month){
		let result = 0;
		
		let date = new Date(year, month, 1);
		while((date.getFullYear() === year) && (date.getMonth() === month)){
			let day = ((date.getDay() - 1) + 7) % 7;
			
			result += ((this.baseWage * this.hours[day] * this.ratio[day]) + this.t_cost);
			
			console.log(date.getFullYear(), date.getMonth(), date.getDate(), result, day);
			date.setDate(date.getDate() + 1);
		}

		return result;
		
	}
}
JobProfile.days = ["月","火","水","木","金","土","日","祝"];
JobProfile.baseWage = 1013;
JobProfile.t_cost = 0;

Meteor.methods({
	addResolution(resolution){
		if(!Meteor.userId()){
			throw new Meteor.Error("not-autohorized");
		}
		Resolutions.insert({
			text:resolution,
			complete:false,
			createdAt: new Date(),
			user:Meteor.userId(),
		});
	},
	toggleResolution(resolution){
		if(Meteor.userId() !== resolution.user){
			throw new Meteor.Error("not-autohorized");
		}
		Resolutions.update(resolution._id,{
			$set : {complete: !resolution.complete}
		})
	},
	deleteResolution(resolution){
		if(Meteor.userId() !== resolution.user){
			throw new Meteor.Error("not-autohorized");
		}
		Resolutions.remove(resolution._id)
	}
});
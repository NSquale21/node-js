const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
.then(res => {
	
	let popular = JSON.parse(res);

	let popularArticles = popular.data.children.map(article => {
		return {
			title : article.data.title
		}
	});
	
	fs.writeFile(path.join(__dirname, './popular-articles.json'), JSON.stringify(popularArticles, null, 2), err => {
		if (err) console.log(err); 
	});
}).catch(err => console.log(err));